<template>
  <div class="placement-stats">
    <SummonerPlacementStat
      v-for="(stat, key, index) in stats"
      :key="index"
      :label="key"
      :stat="stat"/>
  </div>
</template>

<script>
import SummonerPlacementStat from "@/components/summoner/SummonerPlacementStat";

export default {
  name: "SummonerPlacementsStats",

  components: { SummonerPlacementStat },

  props: {
    stats: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.placement-stats {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}
</style>
