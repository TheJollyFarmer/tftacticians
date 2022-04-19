<template>
  <div class="match-summoners">
    <SummonerLink
      v-for="(summoner, index) in summonerList"
      :key="index"
      :summoner="summoner"
      size="small"/>
  </div>
</template>

<script>
import SummonerLink from "@/components/summoner/SummonerLink";
import { mapState } from "vuex";

export default {
  name: "SummonerList",

  components: { SummonerLink },

  props: {
    summoners: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapState(["windowWidth"]),

    summonerList() {
      return this.windowWidth > 1407 ? this.summoners : this.filteredSummoners;
    },

    filteredSummoners() {
      return this.summoners.filter((_, index) => index <= 3);
    }
  }
};
</script>

<style lang="scss" scoped>
.match-summoners {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 0.2em;
  grid-column-gap: $spacing;
  width: 242px;

  @media only screen and (max-width: 1407px) {
    grid-template-columns: 1fr;
    width: 121px;
  }
}
</style>
