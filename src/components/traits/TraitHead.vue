<template>
  <VLevel class="trait-head">
    <div>
      <h3>{{ trait.name }}</h3>
      <h4>{{ trait.type | capitalise }}</h4>
    </div>
    <template #levelRight>
      <ChampionList
        :champions="champions"
        :dimension="dimension"
        :has-popovers="hasPopovers"/>
    </template>
  </VLevel>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import filters from "@/utils/filters";
import VLevel from "@/components/utility/VLevel";

export default {
  name: "TraitHead",

  components: { ChampionList, VLevel },

  filters: {
    capitalise: filters.capitalise
  },

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

    hasPopovers: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    champions() {
      return this.trait.champions.filter(
        champion => champion !== this.$route.params.champion
      );
    }
  }
};
</script>

<style scoped>
.trait-head.level {
  margin-bottom: 0.75em;
}
</style>
