<template>
  <TransitionFade>
    <button
      :class="['button', type]"
      role="button"
      @click="emitClick">
      <VFavicon
        v-if="icon"
        :class="hasContent"
        :icon="icon"/>
      <slot/>
    </button>
  </TransitionFade>
</template>

<script>
import throttle from "lodash/throttle";
import TransitionFade from "../transitions/TransitionFade";
import VFavicon from "./VFavicon";

export default {
  name: "VButton",

  components: { TransitionFade, VFavicon },

  props: {
    type: {
      type: String,
      required: false,
      default: "is-primary"
    },

    icon: {
      type: String,
      required: false,
      default: ""
    }
  },

  emits: ["onClick"],

  computed: {
    hasContent() {
      return this.$slots.default ? "mr" : "";
    }
  },

  methods: {
    emitClick: throttle(function() {
      this.$emit("onClick");
    }, 1000)
  }
};
</script>

<style lang="scss" scoped>
.button {
  background-color: var(--primary);
  border: none;
  box-shadow: var(--shadow);
  color: $white-dark;
  transition: $transition;
  min-width: 40px;

  &:hover {
    background-color: rgba($primary, 0.9);
  }

  &.mr {
    margin-right: 0.25em !important;
  }
}
</style>
