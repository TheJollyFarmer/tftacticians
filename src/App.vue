<template>
  <div :class="['app', theme]">
    <NavBar/>
    <RouterView v-slot="{ Component }">
      <TransitionFade>
        <component
          :is="Component"
          :key="routeKey"/>
      </TransitionFade>
    </RouterView>
    <VFooter :key="routeKey"/>
    <Globals/>
  </div>
</template>

<script>
import Events from "@/mixins/Events";
import Globals from "@/components/Globals";
import NavBar from "./components/nav/NavBar";
import TransitionFade from "@/components/transitions/TransitionFade";
import VFooter from "@/components/utility/VFooter";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",

  components: {
    Globals,
    TransitionFade,
    NavBar,
    VFooter
  },

  mixins: [Events],

  computed: {
    ...mapState(["darkTheme"]),

    theme() {
      return { dark: this.darkTheme };
    },

    routeKey() {
      return this.$route.matched[0] && this.$route.matched[0].meta.key
        ? this.$route.matched[0].meta.key
        : this.$route.path;
    }
  },

  created() {
    this.getData();
  },

  methods: mapActions(["getData", "setWindowWidth", "toggleDarkTheme"])
};
</script>
