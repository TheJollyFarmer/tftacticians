<template>
  <router-link
    to="/"
    class="navbar-item">
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: "VNavBrand"
};
</script>
