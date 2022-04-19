<template>
  <VSection title="placements">
    <article class="placements-section">
      <div class="placements layer">
        <SummonerPlacementsStats :stats="placementStats"/>
        <SummonerPlacementsTiles :placements="placements"/>
      </div>
      <SummonerPlacementsChart :data="chartData"/>
    </article>
  </VSection>
</template>

<script>
import chart from "@/constants/chart.json";
import SummonerPlacementsChart from "@/components/summoner/SummonerPlacementsChart";
import SummonerPlacementsStats from "@/components/summoner/SummonerPlacementsStats";
import SummonerPlacementsTiles from "@/components/summoner/SummonerPlacementsTiles";
import VSection from "@/components/utility/VSection";
import { mapGetters, mapState } from "vuex";

export default {
  name: "SummonerPlacementsSection",

  components: {
    SummonerPlacementsChart,
    SummonerPlacementsStats,
    SummonerPlacementsTiles,
    VSection
  },

  computed: {
    ...mapState("summoner/matches", ["placements"]),

    ...mapGetters("summoner/matches", {
      placementStats: "getPlacementStats",
      aggregates: "getPlacementAggregates"
    }),

    chartData() {
      return Object.values({
        ...chart.columns,
        ...this.aggregates
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.placements-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > .layer {
    align-items: center;
    display: flex;
  }

  .placements {
    display: grid;
    flex: 0 0 396px;
    grid-gap: 1em;
    justify-self: center;
    margin: 0 $spacing-large 0 0;

    @media screen and (max-width: $widescreen) {
      margin: 0 0 $spacing-large 0;
    }
  }
}
</style>
