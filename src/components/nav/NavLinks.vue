<template>
  <nav class="navbar-end">
    <v-nav-item
      icon="users"
      label="Champions"
      link="champions"/>
    <v-nav-item
      icon="layer-group"
      label="Compositions"
      link="compositions"/>
    <v-nav-item
      icon="khanda"
      label="Items"
      link="items"/>
    <v-nav-item
      icon="info"
      label="Information"
      link="information"/>
  </nav>
</template>
<script>
import VNavItem from "../utility/VNavItem";

export default {
  name: "NavLinks",

  components: { VNavItem }
};
</script>
