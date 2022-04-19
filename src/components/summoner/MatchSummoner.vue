<template>
  <VLevel :class="['match-placement layer', placementColour]">
    <MatchPlacementInfo :summoner="summoner"/>
    <ChampionList
      class="champion-list"
      :champions="summoner.champions"
      dimension="40"/>
    <template #levelRight>
      <MatchSummonerTraits :traits="traits"/>
    </template>
  </VLevel>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import MatchPlacementInfo from "@/components/summoner/MatchPlacementInfo";
import MatchSummonerTraits from "@/components/summoner/MatchSummonerTraits";
import PlacementColour from "@/mixins/PlacementColour";
import VLevel from "@/components/utility/VLevel";

export default {
  name: "MatchSummoner",

  components: {
    ChampionList,
    MatchPlacementInfo,
    MatchSummonerTraits,
    VLevel
  },

  mixins: [PlacementColour],

  props: {
    summoner: {
      type: Object,
      required: true
    }
  },

  computed: {
    placement() {
      return this.summoner.placement;
    },

    traits() {
      return this.summoner.traits.filter(trait => trait.style > 0);
    },

    firstRowTraits() {
      return this.traits.filter((_, index) => index <= 4);
    },

    secondRowTraits() {
      return this.traits.filter((_, index) => index > 4);
    }
  }
};
</script>

<style lang="scss" scoped>
.match-placement {
  align-items: center;
  background-color: var(--layer);
  border-left: 6px solid transparent;
  border-left-color: $primary;
  border-radius: $radius;
  box-shadow: $shadow;
  font-size: 0.8em;
  margin-bottom: 0.5rem;
  width: 100%;

  .image-list,
  .image-list > :deep(*) {
    margin: 0;
  }

  &:last-child {
    margin-bottom: 1rem;
  }

  .champion-list > :deep(*:not(:last-child)) {
    margin-right: $spacing-large;
  }

  &.is-secondary {
    border-left-color: var(--secondary);
  }

  &.is-tertiary {
    border-left-color: var(--tertiary);
  }
}
</style>
