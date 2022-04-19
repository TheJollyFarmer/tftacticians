<template>
  <div
    :class="['switch', { 'is-active': darkTheme }]"
    @click="toggleDarkTheme">
    <button class="btn"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ThemeSwitch",

  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: mapState(["darkTheme"]),

  methods: mapActions(["toggleDarkTheme"])
};
</script>

<style lang="scss" scoped>
$moon1: #edddd4;
$moon2: #fcfafa;

$sun1: #ffffff;
$sun2: #ffbe0b;
$sun3: #fb5607;

$animation-speed: 1s;

$width: 40px;
$height: $width / 2;
$padding: $width / 20;

.switch {
  align-self: center;
  background: rgba($black, 0.2);
  border: 1px solid rgba($moon2, 0.125);
  border-radius: $width;
  box-shadow: 0 0 10px rgba(black, 0.1);
  box-sizing: content-box;
  display: flex;
  height: $height;
  padding: $padding;
  position: relative;
  width: $width;
  overflow: hidden;

  &.is-active {
    .btn {
      border: 1px solid rgba($sun3, 1) !important;
      box-shadow: 0 0 2px 1px $sun3;
      left: $width / 2 + $padding / 2;

      &::before {
        opacity: 1;
      }
    }
  }

  .btn {
    background: linear-gradient(
      135deg,
      rgba($moon1, 1) 0%,
      rgba($moon2, 1) 50%,
      rgba($moon1, 1) 51%,
      rgba($moon2, 1) 100%
    );
    border-radius: $width;
    box-shadow: 0 0 2px 1px $moon1;
    border: 1px solid rgba($moon1, 0.5);
    display: block;
    height: $height - ($height / 10) + 0.5;
    left: $padding;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: left $animation-speed ease, box-shadow $animation-speed ease,
      border $animation-speed ease, top $animation-speed ease;
    width: $width / 2 - ($padding / 2);

    &::before {
      background: red;
      background: radial-gradient(
        ellipse at center,
        rgba($sun1, 1) 0%,
        rgba($sun2, 1) 50%,
        rgba($sun3, 1) 100%
      );
      border-radius: $width;
      content: "";
      height: $height;
      left: -($padding / 4);
      position: absolute;
      opacity: 0;
      top: -($padding * 0.4);
      transition: opacity $animation-speed ease;
      width: $width / 2;
    }
  }
}
</style>
