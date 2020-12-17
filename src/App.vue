<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <transition-fade>
        <router-view :key="$route.path"/>
      </transition-fade>
    </div>
    <popover/>
  </div>
</template>

<script>
import NavBar from "./components/nav/NavBar";
import Popover from "@/components/Popover";
import TransitionFade from "@/components/transitions/TransitionFade";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    NavBar,
    Popover,
    TransitionFade
  },

  created() {
    this.setData();
  },

  methods: mapActions(["setData"])
};
</script>

<style scoped>
.container {
  margin-top: 3rem;
}
</style>
