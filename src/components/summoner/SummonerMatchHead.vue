<template>
  <VLevel
    :class="['summoner-match-head', placementColour]"
    @click="toggleEvent">
    <SummonerMatchInfo
      :match="match"
      :placement="placement"/>
    <CompanionImage :image="companion"/>
    <ChampionList
      :champions="summoner.champions"
      dimension="46"/>
    <template #levelRight>
      <SummonerList :summoners="summoners"/>
      <VRotate :rotate="expand"/>
    </template>
  </VLevel>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import Companion from "@/mixins/Companion";
import CompanionImage from "@/components/summoner/CompanionImage";
import PlacementColour from "@/mixins/PlacementColour";
import SummonerList from "@/components/summoner/SummonerList";
import SummonerMatchInfo from "@/components/summoner/SummonerMatchInfo";
import VLevel from "@/components/utility/VLevel";
import VRotate from "@/components/utility/VRotate";
import { mapState } from "vuex";

export default {
  name: "SummonerMatchHead",

  components: {
    ChampionList,
    CompanionImage,
    SummonerList,
    SummonerMatchInfo,
    VLevel,
    VRotate
  },

  mixins: [Companion, PlacementColour],

  props: {
    match: {
      type: Object,
      required: true
    },

    summoners: {
      type: Array,
      required: true
    },

    expand: {
      type: Boolean,
      required: true
    }
  },

  emits: ["toggle"],

  computed: {
    ...mapState("summoner", {
      puuid: state => state.data.puuid
    }),

    summoner() {
      return this.match.summoners.find(sum => sum.puuid === this.puuid);
    },

    placement() {
      return this.summoner.placement;
    }
  },

  methods: {
    toggleEvent() {
      this.$emit("toggle");
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-match-head {
  align-items: center;
  background-blend-mode: color;
  background: linear-gradient(
    -90deg,
    var(--layer) 0%,
    rgba(112, 209, 214, 0.7) 50%,
    rgba(51, 189, 196, 0.7) 75%,
    var(--primary) 100%
  );
  border-radius: $radius;
  box-shadow: $shadow;
  font-size: 0.8em;
  opacity: 0.9;
  padding: 0.75em;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &.is-secondary {
    background: linear-gradient(
      -90deg,
      var(--layer) 0%,
      rgba(211, 191, 220, 0.7) 50%,
      rgba(188, 157, 201, 0.7) 75%,
      var(--secondary) 100%
    );
  }

  &.is-tertiary {
    background: linear-gradient(
      -90deg,
      var(--layer) 0%,
      rgba(247, 188, 190, 0.7) 50%,
      rgba(243, 149, 152, 0.7) 75%,
      var(--tertiary) 100%
    );
  }

  .image-list {
    flex-wrap: wrap;
    width: 472px;
  }

  .companion-image {
    margin: 0 0.5rem;
  }

  .rotate {
    font-size: 2em;
    margin-left: 0.5em;
  }
}
</style>
