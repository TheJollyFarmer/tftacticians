<template>
  <VRouterLink :to="{ params: { composition: composition.name } }">
    <VLevel>
      <CompositionLinkHead :composition="composition"/>
      <template #levelRight>
        <ChampionList :champions="composition.champions"/>
        <VRotate
          v-if="isMobile"
          :rotate="expanded"/>
      </template>
    </VLevel>
  </VRouterLink>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import CompositionLinkHead from "@/components/compositions/CompositionLinkHead";
import VLevel from "@/components/utility/VLevel";
import VRotate from "@/components/utility/VRotate";
import VRouterLink from "@/components/utility/VRouterLink";
import { mapGetters } from "vuex";

export default {
  name: "CompositionLink",

  components: {
    ChampionList,
    CompositionLinkHead,
    VLevel,
    VRotate,
    VRouterLink
  },

  props: {
    composition: {
      type: Object,
      required: true
    },

    expanded: {
      type: Boolean,
      required: true
    }
  },

  computed: mapGetters(["isMobile"])
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $widescreen) {
  .level {
    margin-bottom: 0;
    padding: $spacing-large;

    .rotate {
      margin-left: 1em;
    }
  }
}
</style>
