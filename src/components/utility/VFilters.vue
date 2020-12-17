<template>
  <section>
    <VHeader :text="title"/>
    <VButton
      v-if="canReset"
      type="is-danger is-fullwidth"
      icon="undo"
      @onClick="resetEvent"/>
    <slot/>
  </section>
</template>

<script>
import VButton from "@/components/utility/VButton";
import VHeader from "@/components/utility/VHeader";

export default {
  name: "VFilters",

  components: { VButton, VHeader },

  props: {
    title: {
      type: String,
      required: false,
      default: "filters"
    },

    canReset: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  methods: {
    resetEvent() {
      this.$emit("reset");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: 2px solid $black;
  box-shadow: $shadow;
  margin-bottom: 1.5em;

  &:hover {
    background-color: #f03a5f;
    border: 2px solid $black;
  }
}
</style>
