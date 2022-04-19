<template>
  <TransitionFade>
    <template v-if="!loading">
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

  // beforeRouteEnter: ({ params: { region, name } }, from, next) => {
  //   next(vm => vm.setParameters().getSummoner());
  // },
  //
  // beforeRouteUpdate({ params: { name } }) {
  //   this.setParameters().getSummoner();
  // },

  computed: mapState("summoner", {
    summoner: state => state.data,
    loading: state => state.loading,
    ranked: state => state.ranked,
    region: state => state.form.region,
    hasHistory: state => state.matches.keys.length
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

      return this;
    }
  }
};
</script>
