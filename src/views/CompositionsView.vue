<template>
  <VPage is-full-width>
    <div class="column is-7">
      <VSection title="compositions">
        <CompositionsList :compositions="compositions"/>
      </VSection>
    </div>
    <div
      v-if="!isMobile && composition?.name"
      class="column composition">
      <VSection :title="composition.name">
        <Composition :composition="composition"/>
      </VSection>
    </div>
  </VPage>
</template>

<script>
import Composition from "@/components/compositions/sections/Composition";
import CompositionsList from "@/components/compositions/CompositionList";
import VPage from "@/components/utility/VPage";
import VSection from "@/components/utility/VSection";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CompositionsView",

  components: {
    Composition,
    CompositionsList,
    VPage,
    VSection
  },

  beforeRouteEnter: ({ params }, from, next) => {
    next(vm => vm.setComposition(params.composition));
  },

  beforeRouteUpdate({ params }) {
    this.setComposition(params.composition);
  },

  computed: mapGetters({
    compositions: "compositions/getCompositions",
    composition: "compositions/getActiveComposition",
    isMobile: "isMobile"
  }),

  methods: mapActions("compositions", ["setComposition"])
};
</script>

<style lang="scss" scoped>
.composition .surface {
  //position: sticky;
  //width: 36%;
}

@media only screen and (max-width: $widescreen) {
  .column {
    width: 100%;
  }
}
</style>
