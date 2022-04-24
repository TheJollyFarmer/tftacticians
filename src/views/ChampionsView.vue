<template>
  <VPage title="champions">
    <template #aside>
      <ChampionsFilters @reset="resetQuery"/>
    </template>
    <ChampionTags/>
    <ChampionGrid :champions="champions"/>
  </VPage>
</template>

<script>
import ChampionsFilters from "@/components/champions/filters/ChampionsFilters";
import ChampionGrid from "@/components/champions/ChampionGrid";
import ChampionTags from "@/components/champions/ChampionTags";
import VPage from "@/components/utility/VPage";
import { mapActions, mapGetters } from "vuex";
import { updateQuery } from "@/router/guards";

export default {
  name: "ChampionsView",

  components: {
    ChampionsFilters,
    ChampionGrid,
    ChampionTags,
    VPage
  },

  beforeRouteEnter({ query }, from, next) {
    next(vm => {
      vm.setQuery("");
      vm.addFilters(query);
    });
  },

  beforeRouteUpdate({ query }) {
    this.resetFilters();
    this.addFilters(updateQuery(query));
  },

  computed: mapGetters("champions", { champions: "getChampions" }),

  methods: {
    ...mapActions("champions", ["addFilter", "resetFilters", "setQuery"]),

    resetQuery() {
      this.$router.push({ query: {} });
      this.resetFilters();
    },

    addFilters(query) {
      Object.values(query).forEach(param => this.addParam(param));
    },

    addParam(param) {
      if (!param["search"]) this.setQuery("");
      return Array.isArray(param)
        ? param.forEach(value => this.addFilter(value))
        : this.setQuery(param);
    }
  }
};
</script>
