<template>
  <header
    class="navbar is-fixed-top is-danger has-shadow"
    aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <v-nav-brand>
          <h2 class="is-size-4">
            TFT
          </h2>
        </v-nav-brand>
        <v-hamburger/>
      </div>
      <div
        id="app-navbar-collapse"
        class="navbar-menu">
        <nav-links/>
      </div>
    </div>
  </header>
</template>

<script>
import NavLinks from "./NavLinks";
import VHamburger from "../utility/VHamburger";
import VNavBrand from "./NavBrand";

export default {
  name: "NavBar",

  components: {
    NavLinks,
    VHamburger,
    VNavBrand
  }
};
</script>
