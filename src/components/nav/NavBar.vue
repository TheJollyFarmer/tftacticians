<template>
  <nav
    class="navbar is-fixed-top has-shadow"
    aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <VNavBrand/>
        <VHamburger/>
      </div>
      <div
        id="app-navbar-collapse"
        class="navbar-menu">
        <NavBarEnd/>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarEnd from "@/components/nav/NavBarEnd";
import VHamburger from "../utility/VHamburger";
import VNavBrand from "./NavBrand";

export default {
  name: "NavBar",

  components: {
    NavBarEnd,
    VHamburger,
    VNavBrand
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: var(--nav-shadow);

  &,
  .container {
    background: var(--nav);
    transition-duration: 1s;
    transition-property: background-color, color, box-shadow;
    transition-timing-function: ease;

    .navbar-brand,
    .navbar-menu {
      margin: 0;
    }
  }
}
</style>
