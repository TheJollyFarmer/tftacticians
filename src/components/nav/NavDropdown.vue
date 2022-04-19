<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <div class="navbar-link is-arrowless">
      <VImage
        :is-round="false"
        :has-border="false"
        type="svg"
        image="hexagon"
        dimension="20"
        dir="general"/>
    </div>
    <div class="navbar-dropdown is-right">
      <slot/>
    </div>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "NavDropdown",

  components: { VImage },

  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-item {
  &:hover {
    .navbar-link {
      background-color: var(--transparent);
      transition: background-color $hover-out;
    }

    .navbar-dropdown {
      opacity: 1;
      transform: translateY(0);
      transition: $hover-out;
      transition-property: transform, opacity;
      visibility: visible;
    }
  }

  .navbar-link {
    transition: background-color $hover-in;
    padding: 0.5rem 0.875rem;
  }

  .navbar-dropdown {
    background-color: var(--layer);
    border-top: none;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
    display: block;
    min-width: 149px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    transform: translateY(-15px);
    transition: all $hover-in;
    visibility: hidden;
    z-index: -1;
  }
}
</style>
