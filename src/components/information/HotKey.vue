<template>
  <div class="hotkey">
    <div
      v-for="label in hotkey.labels"
      :key="label"
      :class="['hotkey-label', hotkey.class]">
      {{ label }}
    </div>
    <span class="hotkey-action">
      {{ hotkey.action }}
    </span>
  </div>
</template>

<script>
export default {
  name: "HotKey",

  props: {
    hotkey: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.hotkey {
  align-items: center;
  display: flex;

  &:nth-child(6) {
    grid-column: 2;
    grid-row: 4;

    .hotkey-label:last-of-type {
      width: 65px;
    }
  }

  &:nth-child(7) {
    grid-column: 1;
  }

  .hotkey-label {
    align-items: center;
    border: 2px solid $primary;
    border-radius: 5px;
    box-shadow: $shadow;
    color: $primary;
    display: flex;
    font-weight: 600;
    height: 25px;
    justify-content: center;
    margin-right: 0.5em;
    padding: 1em;
    width: 25px;
  }

  .hotkey-action {
    color: $grey-dark;
    font-weight: bold;
    margin-left: 0.5em;
  }
}
</style>
