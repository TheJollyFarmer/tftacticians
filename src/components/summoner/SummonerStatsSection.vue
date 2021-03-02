<template>
  <VSection title="stats">
    <div class="stats">
      <SummonerStat
        v-for="(stat, key, index) in stats"
        :key="index"
        :label="key"
        :value="stat"/>
    </div>
  </VSection>
</template>

<script>
import VSection from "@/components/utility/VSection";
import SummonerStat from "@/components/summoner/SummonerStat";
import { mapGetters } from "vuex";

export default {
  name: "SummonerStatsSection",

  components: { SummonerStat, VSection },

  computed: mapGetters("summoner/matches", {
    stats: "getMatchRates"
  })
};
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  flex-wrap: wrap;
}
</style>
