<template>
  <VPage>
    <template #aside>
      <SummonerPortraitSection :summoner="summoner"/>
      <SummonerTierSection
        v-if="ranked"
        :ranked="ranked"
        :region="region"/>
      <SummonerStatsSection/>
    </template>
    <SummonerPlacementsSection/>
    <SummonerTrendsSection/>
    <SummonerHistorySection/>
  </VPage>
</template>

<script>
import SummonerHistorySection from "@/components/summoner/SummonerHistorySection";
import SummonerPlacementsSection from "@/components/summoner/SummonerPlacementsSection";
import SummonerPortraitSection from "@/components/summoner/SummonerPortraitSection";
import SummonerStatsSection from "@/components/summoner/SummonerStatsSection";
import SummonerTierSection from "@/components/summoner/SummonerTierSection";
import SummonerTrendsSection from "@/components/summoner/SummonerTrendsSection";
import VPage from "@/components/utility/VPage";

export default {
  name: "SummonerContent",

  components: {
    SummonerHistorySection,
    SummonerPlacementsSection,
    SummonerPortraitSection,
    SummonerStatsSection,
    SummonerTierSection,
    SummonerTrendsSection,
    VPage
  },

  props: {
    summoner: {
      type: Object,
      required: true
    },

    ranked: {
      type: Object,
      required: false,
      default: () => {}
    },

    region: {
      type: String,
      required: true
    }
  },

  computed: {
    isRanked() {
      return Object.keys(this.ranked).length !== 0;
    }
  }
};
</script>
