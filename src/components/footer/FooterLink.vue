<template>
  <component
    :is="component"
    v-bind="prop">
    <VFavicon :icon="link.icon"/>
  </component>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "FooterLink",

  components: { VFavicon },

  props: {
    link: {
      type: Object,
      required: true
    }
  },

  computed: {
    component() {
      return this.link.path ? "router-link" : "a";
    },

    prop() {
      return this.link.path
        ? { to: "/" + this.link.path }
        : { href: this.link.href };
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: $white-dark;

  &:hover {
    filter: brightness(90%);
    transition: all $hover-out;
  }
}
</style>
