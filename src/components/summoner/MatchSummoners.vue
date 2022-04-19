<template>
  <TransitionExpand>
    <div class="match-details">
      <MatchSummoner
        v-for="(summoner, index) in summoners"
        :key="index"
        :summoner="summoner"/>
    </div>
  </TransitionExpand>
</template>

<script>
import MatchSummoner from "@/components/summoner/MatchSummoner";
import TransitionExpand from "@/components/transitions/TransitionExpand";

export default {
  name: "MatchSummoners",

  components: { MatchSummoner, TransitionExpand },

  props: {
    summoners: {
      type: Array,
      required: true
    }
  }
};
</script>
