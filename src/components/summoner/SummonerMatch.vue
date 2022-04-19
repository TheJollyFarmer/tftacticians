<template>
  <div
    ref="observer"
    class="summoner-match">
    <SummonerMatchHead
      :expand="expand"
      :match="match"
      :summoners="summoners"
      @toggle="toggleExpand"/>
    <TransitionExpand>
      <MatchSummoners
        v-if="loaded"
        v-show="expand"
        :summoners="summoners"/>
    </TransitionExpand>
  </div>
</template>

<script>
import Observer from "@/mixins/Observer";
import SummonerMatchHead from "@/components/summoner/SummonerMatchHead";
import TransitionExpand from "@/components/transitions/TransitionExpand";
import { sort } from "@/utils/helpers";
import { defineAsyncComponent } from "vue";
import { mapActions } from "vuex";

const MatchSummoners = defineAsyncComponent(() =>
  import("@/components/summoner/MatchSummoners")
);

export default {
  name: "SummonerMatch",

  components: {
    SummonerMatchHead,
    MatchSummoners,
    TransitionExpand
  },

  mixins: [Observer],

  props: {
    match: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      expand: false,
      loaded: false
    };
  },

  computed: {
    summoners() {
      return sort(this.match.summoners, "placement", "asc");
    }
  },

  methods: {
    ...mapActions("summoner/matches", ["getSummonerNames"]),

    executeObserver() {
      this.$data.loaded = true;
      this.getSummonerNames(this.match);
      this.observer.disconnect();
    },

    toggleExpand() {
      this.expand = !this.expand;
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-match {
  margin-bottom: $spacing-large;

  &:last-child {
    margin-bottom: -$spacing-large;
  }
}
</style>
