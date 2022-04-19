<template>
  <TransitionFade>
    <li :class="[type, { 'is-active': isActive }]">
      <slot>
        <span v-text="option"/>
      </slot>
      <VToggle
        v-if="hasCheckbox"
        :is-active="isActive"/>
    </li>
  </TransitionFade>
</template>

<script>
import VToggle from "@/components/utility/VToggle";
import TransitionFade from "@/components/transitions/TransitionFade";

export default {
  name: "VFilterOption",

  components: { TransitionFade, VToggle },

  props: {
    option: {
      type: [String, Number],
      required: false,
      default: ""
    },

    hasCheckbox: {
      type: Boolean,
      required: false,
      default: true
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    type() {
      return this.hasCheckbox
        ? "filter-option-checkbox"
        : "filter-option-image";
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-option-checkbox {
  align-items: center;
  border-top: 1px solid var(--border);
  display: flex;
  font-size: 0.9em;
  height: 2.75rem;
  position: relative;
  max-height: 2.75rem;

  > .icon {
    position: absolute;
    right: 1rem;
  }

  &:last-of-type {
    border-bottom-right-radius: $radius;
    border-bottom-left-radius: $radius;
  }
}

.filter-option-image {
  position: relative;
  opacity: 0.6;
  transition-duration: 0.2s;

  &.is-active,
  &:hover {
    opacity: 1;
    transition: opacity $hover-out;

    :deep(.image) {
      border-color: var(--primary) !important;
    }
  }
}
</style>
