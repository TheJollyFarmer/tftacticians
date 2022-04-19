<template>
  <div :class="['divider', isDark]">
    <slot/>
    <VImage
      :dimension="dimension"
      :has-border="false"
      image="divider"
      type="svg"
      dir="general"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";
import { mapState } from "vuex";

export default {
  name: "VDivider",

  components: { VImage },

  props: {
    dimension: {
      type: String,
      required: false,
      default: "18"
    }
  },

  computed: {
    ...mapState(["darkTheme"]),

    isDark() {
      return this.darkTheme ? "" : "is-dark";
    }
  }
};
</script>

<style lang="scss" scoped>
.divider {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:before,
  &:after {
    background: linear-gradient(
      to right,
      var(--surface),
      var(--divider) 50%,
      var(--surface)
    );
    content: "";
    height: 1px;
    left: calc(50% + 10px);
    position: absolute;
    bottom: 0 + 6px;
    transition: $transition;
    width: calc(40% - 13px);
  }

  &:after {
    right: calc(50% + 10px);
    left: unset;
  }

  &.is-dark :deep(.image) {
    filter: brightness(0) saturate(100%) invert(28%) sepia(0%) saturate(1520%)
      hue-rotate(172deg) brightness(96%) contrast(89%);
  }

  :deep(.image) {
    height: auto;
  }
}
</style>
