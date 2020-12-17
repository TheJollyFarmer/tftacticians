<template>
  <VPage :title="partial">
    <template #aside>
      <InformationMenu
        :sections="info"
        :active="partial"
        @set="setPartial"/>
    </template>
    <TransitionFade>
      <component :is="component"/>
    </TransitionFade>
  </VPage>
</template>

<script>
import filters from "@/utils/filters";
import info from "@/constants/information";
import InformationMenu from "@/components/information/InformationMenu";
import TransitionFade from "@/components/transitions/TransitionFade";
import VPage from "@/components/utility/VPage";

export default {
  name: "InformationView",

  components: {
    InformationMenu,
    TransitionFade,
    VPage
  },

  data() {
    return {
      partial: "season 3",
      info
    };
  },

  computed: {
    component() {
      let component =
        "Info" +
        filters.capitalise(this.partial.replace(/ +/g, "")) +
        "Partial";

      return () => import(`@/components/information/${component}`);
    }
  },

  methods: {
    setPartial(section) {
      this.partial = section;
    }
  }
};
</script>
