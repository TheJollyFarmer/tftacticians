<template>
  <div class="buttons has-addons">
    <VButton
      v-for="button in buttons"
      :key="button"
      :class="['is-expanded', {'is-outlined': button !== active}]"
      @onClick="clickEvent(button)">
      {{ button }}
    </VButton>
  </div>
</template>

<script>
import VButton from "@/components/utility/VButton";

export default {
  name: "VButtons",

  components: { VButton },

  props: {
    buttons: {
      type: Array,
      required: true
    },

    active: {
      type: String,
      required: false,
      default: ""
    }
  },

  emits: ["onClick"],

  methods: {
    clickEvent(button) {
      this.$emit("onClick", button);
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  font-weight: bold;
  text-transform: capitalize;
  transition-property: all;

  &.is-outlined {
    border: 1px solid var(--primary);
    color: var(--colour);

    &:focus {
      background-color: inherit;
      color: var(--colour);
    }

    &:hover {
      background-color: inherit;
      filter: brightness(1.2);
    }
  }
}
</style>
