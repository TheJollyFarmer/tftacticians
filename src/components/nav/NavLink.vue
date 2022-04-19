<template>
  <RouterLink
    :to="'/' + link"
    class="navbar-link is-arrowless router-link"
    @click="$emit('onClick')">
    <div v-tooltip:bottom="link">
      <VFavicon :icon="icon"/>
    </div>
  </RouterLink>
</template>

<script>
import VFavicon from "../utility/VFavicon";

export default {
  name: "NavLink",

  components: { VFavicon },

  props: {
    icon: {
      type: String,
      required: false,
      default: null
    },

    link: {
      type: String,
      required: true
    }
  },

  emits: ["onClick"]
};
</script>

<style lang="scss" scoped>
.navbar-link {
  border-bottom: 2px solid transparent;
  color: $white-dark;
  padding: 0;
  transition: $hover-in;
  transition-property: background-color, border-bottom-color;

  > div {
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0.5rem 0.75rem;
  }

  &:active,
  &:focus-within,
  &:hover,
  &.router-link-active {
    background-color: inherit;
    border-bottom: 2px solid $white-dark;
    transition: $hover-out;
    transition-property: background-color, border-bottom-color;
  }

  &:hover {
    background-color: var(--transparent);
  }
}
</style>
