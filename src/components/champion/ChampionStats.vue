<template>
  <ul>
    <ChampionStat
      v-for="(stat, index) in stats"
      :key="index"
      :stat="stat"/>
  </ul>
</template>

<script>
import ChampionStat from "@/components/champion/ChampionStat";

export default {
  name: "ChampionStats",

  components: { ChampionStat },

  props: {
    stats: {
      type: Array,
      required: true
    }
  }
};
</script>
