<template>
  <header :class="['heading', classes]">
    <VDivider/>
    <component
      :is="elementType"
      v-text="text"/>
    <VDivider/>
    <slot/>
  </header>
</template>

<script>
import VImage from "@/components/utility/VImage";
import VDivider from "@/components/utility/VDivider";

export default {
  name: "VHeader",

  components: { VDivider, VImage },

  props: {
    text: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "1"
    },

    size: {
      type: String,
      required: false,
      default: "4"
    },

    colour: {
      type: String,
      required: false,
      default: "grey-dark"
    }
  },

  computed: {
    elementType() {
      return `h${this.type}`;
    },

    classes() {
      return [`is-size-${this.size}`, `has-text-${this.colour}`];
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  h1,
  h2 {
    align-items: center;
    line-height: normal;
    margin: 0 5px;
  }

  .image {
    align-items: center;
    display: flex;
  }

  &:before,
  &:after {
    border-bottom: 1px solid $grey-dark;
    content: "";
    flex: 1 0 0;
  }
}
</style>
