<template>
  <VSection title="match history">
    <div class="match-history">
      <SummonerMatch
        v-for="(match, index) in data"
        :key="index"
        :match="match"/>
    </div>
  </VSection>
</template>

<script>
import VSection from "@/components/utility/VSection";
import { mapState } from "vuex";
import SummonerMatch from "@/components/summoner/SummonerMatch";

export default {
  name: "SummonerHistorySection",

  components: { SummonerMatch, VSection },

  computed: mapState("summoner/matches", ["data"])
};
</script>
