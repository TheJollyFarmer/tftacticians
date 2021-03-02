<template>
  <div>
    <NavBar/>
    <TransitionFade>
      <RouterView :key="$route.path"/>
    </TransitionFade>
    <Popover/>
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
