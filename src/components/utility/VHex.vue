<template>
  <div
    class="hexagon"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @click="clickEvent">
    <div class="hexTop"/>
    <div class="hexBottom"/>
  </div>
</template>

<script>
export default {
  name: "VHex",

  emits: ["mouseenter", "mouseleave", "onClick"],

  methods: {
    mouseenter() {
      this.$emit("mouseenter");
    },

    mouseleave() {
      this.$emit("mouseleave");
    },

    clickEvent() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.hexagon {
  background-color: var(--surface);
  background-position: center;
  background-size: auto 41.569px;
  border-left: solid 2px var(--colour);
  border-right: solid 2px var(--colour);
  height: 23.09px;
  margin: 7px 0.1em;
  position: relative;
  width: 2.5rem;

  &:after {
    background: inherit;
    content: "";
    height: 20.7846px;
    left: 0;
    position: absolute;
    top: 1.1547px;
    width: 36px;
    z-index: 2;
  }

  &.starred:before {
    content: "★★★";
    color: rgb(228, 193, 87);
    font-size: 14px;
    left: 50%;
    letter-spacing: -3px;
    margin-left: -1px;
    position: absolute;
    top: -8px;
    text-align: center;
    text-shadow: rgb(0, 0, 0) 0 3px 3px;
    transform: translateX(-50%);
    width: 100%;
    z-index: 10;
  }

  .hexTop,
  .hexBottom {
    background: inherit;
    height: 28.28px;
    left: 3.86px;
    position: absolute;
    overflow: hidden;
    transform: scaleY(0.577) rotate(-45deg);
    width: 28.28px;
    z-index: 1;
  }

  .hexTop {
    border-top: solid 2.828px;
    border-right: solid 2.828px;
    top: -14.14px;
  }

  .hexBottom {
    bottom: -14.14px;
    border-bottom: solid 2.828px;
    border-left: solid 2.828px;
  }

  .hexTop:after,
  .hexBottom:after {
    background: inherit;
    content: "";
    height: 20.78px;
    position: absolute;
    transform: rotate(45deg) scaleY(1.73) translateY(-10.39px);
    transform-origin: 0 0;
    width: 36px;
  }

  .hexTop:after {
    background-position: center top;
  }

  .hexBottom:after {
    background-position: center bottom;
  }
}
</style>
