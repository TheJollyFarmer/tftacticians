<template>
  <VFilters @reset="resetFilters">
    <ChampionsCostFilter
      :collection="[1, 2, 3, 4, 5]"
      @apply="applyFilter"
      @remove="popFilter"/>
    <ChampionsTraitFilter
      :collection="origins"
      label="origin"
      @apply="applyFilter"
      @remove="popFilter"/>
    <ChampionsTraitFilter
      :collection="classes"
      label="class"
      @apply="applyFilter"
      @remove="popFilter"/>
  </VFilters>
</template>

<script>
import ChampionsCostFilter from "@/components/champions/filters/ChampionsCostFilter";
import ChampionsTraitFilter from "@/components/champions/filters/ChampionsTraitFilter";
import VFilters from "@/components/utility/VFilters";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ChampionViewFilters",

  components: {
    ChampionsCostFilter,
    ChampionsTraitFilter,
    VFilters
  },

  computed: mapGetters("champions/traits", {
    origins: "getOrigins",
    classes: "getClasses"
  }),

  destroyed() {
    this.resetFilters();
  },

  methods: {
    ...mapActions("champions", ["addFilter", "removeFilter", "resetFilters"]),

    applyFilter({ filter, type }) {
      this.addFilter({
        filter,
        type: "ADD_" + this.type(type)
      });
    },

    popFilter({ filter, type }) {
      this.removeFilter({
        filter,
        type: "REMOVE_" + this.type(type)
      });
    },

    type(type) {
      return type.toUpperCase() + "_FILTER";
    }
  }
};
</script>
