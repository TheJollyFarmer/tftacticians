<template>
  <router-link
    v-tooltip:bottom="label"
    :to="'/' + link"
    class="navbar-link is-arrowless"
    @click="$emit('onClick')">
    <v-favicon :icon="icon"/>
  </router-link>
</template>

<script>
import VFavicon from "./VFavicon";

export default {
  name: "VNavItem",

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
    },

    label: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
