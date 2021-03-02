<template>
  <VPage v-if="!loading">
    <template #aside>
      <SummonerPortraitSection
        :name="name"
        :tier="ranked.tier"/>
      <SummonerTierSection
        :ranked="ranked"
        :region="region"/>
      <SummonerStatsSection/>
    </template>
    <SummonerPlacementsSection/>
    <SummonerTrendsSection/>
    <SummonerHistorySection/>
  </VPage>
  <VLoader v-else/>
</template>

<script>
import SummonerHistorySection from "@/components/summoner/SummonerHistorySection";
import SummonerPlacementsSection from "@/components/summoner/SummonerPlacementsSection";
import SummonerPortraitSection from "@/components/summoner/SummonerPortraitSection";
import SummonerStatsSection from "@/components/summoner/SummonerStatsSection";
import SummonerTierSection from "@/components/summoner/SummonerTierSection";
import SummonerTrendsSection from "@/views/SummonerTrendsSection";
import VLoader from "@/components/utility/VLoader";
import VPage from "@/components/utility/VPage";
import { mapActions, mapState } from "vuex";

export default {
  name: "SummonerView",

  components: {
    SummonerTrendsSection,
    SummonerHistorySection,
    SummonerPlacementsSection,
    SummonerPortraitSection,
    SummonerStatsSection,
    SummonerTierSection,
    VLoader,
    VPage
  },

  computed: mapState("summoner", {
    name: state => state.data.name,
    loading: state => state.loading,
    ranked: state => state.ranked,
    region: state => state.region
  }),

  beforeMount() {
    this.setParameters();
    this.getSummoner();
  },

  methods: {
    ...mapActions("summoner", ["updateRegion", "updateName", "getSummoner"]),

    setParameters() {
      this.updateRegion(this.$route.params.region);
      this.updateName(this.$route.params.name);
    }
  }
};
</script>
