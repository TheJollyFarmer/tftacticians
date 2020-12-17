<template>
  <div class="key">
    <div> {{ label }} </div>
    <div v-if="labelTwo">
      {{ labelTwo }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VKeyboardKey",

  props: {
    label: {
      type: String,
      required: true
    },

    labelTwo: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.key {
  align-items: center;
  border: 2px solid $grey-dark;
  border-radius: 5px;
  box-shadow: $shadow;
  cursor: default;
  display: flex;
  grid-column: span 2;
  justify-content: center;
  line-height: normal;
  padding: 0.2rem;
  text-transform: uppercase;

  &:hover {
    border: 2px solid $primary;
    color: $primary;
  }

  &.is-active {
    border-color: $primary;
    color: $primary;
  }

  &.is-left {
    align-items: flex-end;
    justify-content: left;
  }

  &.is-right {
    align-items: flex-end;
    justify-content: flex-end;
  }

  &.is-span-3 {
    grid-column: span 3;
  }

  &.is-span-4 {
    grid-column: span 4;
  }

  &.is-span-5 {
    grid-column: span 5;
  }

  &.is-span-10 {
    grid-column: span 10;
  }

  &.is-small {
    font-size: 9px;
    text-transform: lowercase;
  }

  &.is-column {
    flex-direction: column;
    justify-content: space-between;

    &.is-left {
      align-items: flex-start;
    }
  }

  &.tab,
  &.backspace {
    font-size: 1.2em;
    line-height: 0.5;
  }

  &.up-down {
    border: none;
    display: grid;
    grid-gap: 2px;
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: 100%;
    padding: 0;

    > div {
      align-items: center;
      display: flex;
      border: 2px solid black;
      border-radius: 5px;
      grid-column: span 1;
      justify-content: center;
      min-height: 98%;

      &:first-of-type {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:last-of-type {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
}
</style>
