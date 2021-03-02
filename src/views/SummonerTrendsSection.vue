<template>
  <VSection title="trends">
    <div class="summoner-trends">
      <SummonerTrend
        title="champions"
        :data="champions"/>
      <SummonerTrend
        title="items"
        :data="items"/>
      <SummonerTrend
        title="traits"
        :data="traits"/>
    </div>
  </VSection>
</template>

<script>
import SummonerTrend from "@/views/SummonerTrend";
import VSection from "@/components/utility/VSection";
import { mapGetters } from "vuex";

export default {
  name: "SummonerTrendsSection",

  components: { SummonerTrend, VSection },

  computed: mapGetters("summoner/matches", {
    champions: "getChampionTrends",
    items: "getItemTrends",
    traits: "getTraitTrends"
  })
};
</script>

<style lang="scss" scoped>
.summoner-trends {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, minmax(0, 33.3%));
}
</style>
