<template>
  <VLevel class="trait-head">
    <div>
      <h3>{{ trait.name }}</h3>
      <h4>{{ trait.type }}</h4>
    </div>
    <template #levelRight>
      <ChampionList
        :champions="champions"
        :dimension="dimension"
        :popovers="popovers"
        :tooltips="!popovers"/>
    </template>
  </VLevel>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import VLevel from "@/components/utility/VLevel";
import { mapGetters, mapState } from "vuex";

export default {
  name: "TraitHead",

  components: { ChampionList, VLevel },

  props: {
    trait: {
      type: Object,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    popovers: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    ...mapState(["activeSet"]),
    ...mapGetters("champions", ["getChampionByName"]),

    champions() {
      return this.$route.params.champion
        ? this.trait.champions.filter(champion => champion !== this.champion)
        : this.trait.champions;
    },

    champion() {
      return this.$route.params.champion
        ? this.getChampionByName(this.$route.params.champion).id
        : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.trait-head.level {
  margin-bottom: 0.75em;

  h4 {
    text-transform: capitalize;
  }
}
</style>
