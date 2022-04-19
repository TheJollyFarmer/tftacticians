<template>
  <RouterLink
    to="/"
    class="navbar-item">
    <slot>
      <VImage
        image="logo"
        dir="general"
        type="svg"
        :is-round="false"
        :has-border="false"/>
      <h2 class="is-size-5 ml-2">
        TFTacticians
      </h2>
    </slot>
  </RouterLink>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "VNavBrand",
  components: { VImage }
};
</script>

<style lang="scss" scoped>
.navbar-item {
  transition: opacity $hover-in;

  h2 {
    font-weight: normal !important;
    font-style: italic;
  }

  &:focus,
  &.is-active {
    color: $white-dark;
    transition: all $hover-out;
  }

  &:hover {
    filter: brightness(130%);
    transition: all $hover-out;
  }
}
</style>
