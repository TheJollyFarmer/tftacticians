<template>
  <VSection title="match history">
    <div class="match-history">
      <SummonerMatch
        v-for="(match, index) in matches"
        :key="index"
        :match="match"/>
    </div>
  </VSection>
</template>

<script>
import SummonerMatch from "@/components/summoner/SummonerMatch";
import VSection from "@/components/utility/VSection";
import { mapGetters } from "vuex";

export default {
  name: "SummonerHistorySection",

  components: { SummonerMatch, VSection },

  computed: mapGetters("summoner/matches", {
    matches: "getMatches"
  })
};
</script>
