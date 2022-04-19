<template>
  <component
    :is="elementType"
    class="dropdown-item"
    @click="$emit('onClick')">
    <slot/>
  </component>
</template>

<script>
export default {
  name: "VListItem",

  props: {
    hasLink: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  emits: ["onClick"],

  computed: {
    elementType() {
      return this.hasLink ? "a" : "div";
    }
  }
};
</script>
