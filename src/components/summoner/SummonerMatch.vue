<template>
  <VLevel class="summoner-match">
    <div class="match-info">
      <span v-text="summoner.placement"/>
      <span v-text="matchType"/>
      <span v-text="gameLength"/>
      <span v-text="gameTime"/>
    </div>
    <ChampionList :champions="summoner.champions"/>
  </VLevel>
</template>

<script>
import filters from "@/utils/filters";
import VLevel from "@/components/utility/VLevel";
import { mapState } from "vuex";
import ChampionList from "@/components/champions/ChampionList";

export default {
  name: "SummonerMatch",

  components: { ChampionList, VLevel },

  props: {
    match: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState("summoner", ["data"]),

    summoner() {
      return this.match.summoners[this.data.puuid];
    },

    matchType() {
      return this.match.queue === 1100 ? "Ranked" : "Normal";
    },

    gameLength() {
      return (this.match.gameLength / 60).toPrecision(2) + " minutes";
    },

    gameTime() {
      return filters.relativeTime(this.match.gameTime);
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-match {
  align-items: center;
  border-left: 4px solid $primary;
  box-shadow: $shadow;
  display: flex;
  font-size: 0.9em;
  padding: 0.75em;
  width: 100%;

  .match-info {
    display: flex;
    flex-direction: column;
    margin-right: 0.5em;
  }
}
</style>
