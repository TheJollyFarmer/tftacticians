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
  background-color: pink;
  background-position: center;
  background-size: auto 41.569px;
  border-left: solid 2px $primary;
  border-right: solid 2px $primary;
  height: 23.09px;
  margin: 7px 0.1em;
  position: relative;
  width: 2.5rem;

  &:nth-child(14n + 8) {
    margin-left: 6.7%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 1.1547px;
    left: 0;
    width: 36px;
    height: 20.7846px;
    z-index: 2;
    background: inherit;
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
    position: absolute;
    z-index: 1;
    width: 28.28px;
    height: 28.28px;
    overflow: hidden;
    transform: scaleY(0.577) rotate(-45deg);
    background: inherit;
    left: 3.86px;
  }

  .hexTop {
    top: -14.14px;
    border-top: solid 2.828px $primary;
    border-right: solid 2.828px $primary;
  }

  .hexBottom {
    bottom: -14.14px;
    border-bottom: solid 2.828px $primary;
    border-left: solid 2.828px $primary;
  }

  .hexTop:after,
  .hexBottom:after {
    content: "";
    position: absolute;
    width: 36px;
    height: 20.78px;
    transform: rotate(45deg) scaleY(1.73) translateY(-10.39px);
    transform-origin: 0 0;
    background: inherit;
  }

  .hexTop:after {
    background-position: center top;
  }

  .hexBottom:after {
    background-position: center bottom;
  }
}
</style>
