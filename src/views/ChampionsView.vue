<template>
  <VPage title="champions">
    <template #aside>
      <ChampionsFilters #aside/>
    </template>
    <ChampionTags :filters="filters"/>
    <ChampionGrid :champions="champions"/>
  </VPage>
</template>

<script>
import ChampionsFilters from "@/components/champions/filters/ChampionsFilters";
import ChampionGrid from "@/components/champions/ChampionGrid";
import ChampionTags from "@/components/champions/ChampionTags";
import VPage from "@/components/utility/VPage";
import { mapGetters, mapState } from "vuex";

export default {
  name: "ChampionsView",

  components: {
    ChampionGrid,
    ChampionsFilters,
    ChampionTags,
    VPage
  },

  computed: {
    ...mapState("champions", ["filters"]),

    ...mapGetters("champions", {
      champions: "getChampions"
    })
  }
};
</script>
