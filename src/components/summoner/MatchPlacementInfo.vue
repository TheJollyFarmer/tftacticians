<template>
  <div class="match-summoner-info">
    <span v-text="summoner.placement"/>
    <SummonerLink :summoner="summoner"/>
  </div>
</template>

<script>
import SummonerLink from "@/components/summoner/SummonerLink";

export default {
  name: "MatchPlacementInfo",

  components: { SummonerLink },

  props: {
    summoner: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.match-summoner-info {
  align-items: center;
  display: flex;
  line-height: 1;
  width: 195px;

  > *:not(:last-child) {
    margin-right: $spacing;
  }

  span:first-child {
    font-size: 0.9rem;
    font-weight: bold;
  }
}
</style>
