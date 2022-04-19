<template>
  <VPage :title="viewName">
    <template #aside>
      <HelpMenu :sections="sections"/>
    </template>
    <RouterView v-slot="{ Component }">
      <TransitionFade>
        <component :is="Component"/>
      </TransitionFade>
    </RouterView>
  </VPage>
</template>

<script>
import HelpMenu from "@/components/help/HelpMenu";
import sections from "@/constants/help.json";
import TransitionFade from "@/components/transitions/TransitionFade";
import VPage from "@/components/utility/VPage";

export default {
  name: "HelpView",

  components: {
    HelpMenu,
    TransitionFade,
    VPage
  },

  data() {
    return { sections };
  },

  computed: {
    viewName() {
      return this.$route.name;
    }
  }
};
</script>
