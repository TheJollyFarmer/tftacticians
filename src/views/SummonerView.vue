<template>
  <TransitionFade>
    <template v-if="!loading && !!summoner">
      <SummonerContent
        v-if="hasHistory"
        :summoner="summoner"
        :ranked="ranked"
        :region="region"/>
      <NoHistory
        v-else
        :summoner="summoner"
        :region="region"/>
    </template>
    <VLoader
      v-else
      for-view/>
  </TransitionFade>
</template>

<script>
import NoHistory from "@/views/NoHistory";
import SummonerContent from "@/views/SummonerContent";
import TransitionFade from "@/components/transitions/TransitionFade";
import VLoader from "@/components/utility/VLoader";
import { mapActions, mapState } from "vuex";

export default {
  name: "SummonerView",

  components: {
    NoHistory,
    SummonerContent,
    TransitionFade,
    VLoader
  },

  computed: mapState("summoner", {
    summoner: state => state.data,
    loading: state => state.loading,
    ranked: state => state.ranked,
    region: state => state.form.region,
    hasHistory: state => state.matches.keys.length
  }),

  beforeMount() {
    let name = this.$route.params.name;

    this.summoner.name === name
      ? this.getSummonerData()
      : this.getSummoner({ region: this.$route.params.region, name });
  },

  methods: mapActions("summoner", ["getSummoner", "getSummonerData"])
};
</script>
