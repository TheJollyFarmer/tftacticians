<template>
  <VSection title="stats">
    <ul>
      <ChampionStat
        v-for="(stat, index) in stats"
        :key="index"
        :stat="stat"/>
    </ul>
  </VSection>
</template>

<script>
import ChampionStat from "@/components/champion/ChampionStat";
import VSection from "@/components/utility/VSection";

export default {
  name: "ChampionStatsSection",

  components: { ChampionStat, VSection },

  props: {
    stats: {
      type: Array,
      required: true
    }
  }
};
</script>
