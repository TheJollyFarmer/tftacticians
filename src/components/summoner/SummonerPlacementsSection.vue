<template>
  <VSection title="recent match placements">
    <article class="placements-section">
      <div class="placements">
        <SummonerPlacementsStats :stats="placementStats"/>
        <SummonerPlacementsTiles :placements="placements"/>
      </div>
      <VBarChart
        class="placements-graph"
        :chart-data="chartData"/>
    </article>
  </VSection>
</template>

<script>
import SummonerPlacementsStats from "@/components/summoner/SummonerPlacementsStats";
import SummonerPlacementsTiles from "@/components/summoner/SummonerPlacementsTiles";
import VBarChart from "@/components/utility/VBarChart";
import VSection from "@/components/utility/VSection";
import { mapGetters, mapState } from "vuex";

export default {
  name: "SummonerPlacementsSection",

  components: {
    SummonerPlacementsStats,
    SummonerPlacementsTiles,
    VBarChart,
    VSection
  },

  computed: {
    ...mapState("summoner/matches", ["placements"]),

    ...mapGetters("summoner/matches", {
      placementStats: "getPlacementStats",
      aggregates: "getAggregates"
    }),

    chartData() {
      return {
        labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
        datasets: [
          {
            backgroundColor: [
              "#F14668",
              "#B86BFF",
              "#B86BFF",
              "#B86BFF",
              "#00D1B2",
              "#00D1B2",
              "#00D1B2",
              "#00D1B2"
            ],
            borderColor: "black",
            borderWidth: 2,
            data: [
              ...Object.values(this.aggregates),
              ...[0, 0, 0, 0, 0, 0, 0, 0]
            ]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.placements-section {
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .placements {
    display: flex;
    flex: 0 0 47%;
    flex-direction: column;
  }

  .placements-graph {
    flex: 0 0 49%;
    height: 140px;
    overflow: hidden;
    position: relative;
  }
}
</style>
