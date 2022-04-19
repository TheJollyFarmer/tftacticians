<template>
  <div>
    <TraitLinkList
      :traits="firstRowTraits"
      size="small"/>
    <TraitLinkList
      v-if="secondRowTraits.length"
      :traits="secondRowTraits"
      class="traits-second-row"
      size="small"/>
  </div>
</template>

<script>
import TraitLinkList from "@/components/traits/TraitLinkList";

export default {
  name: "MatchSummonerTraits",

  components: { TraitLinkList },

  props: {
    traits: {
      type: Array,
      required: true
    }
  },

  computed: {
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
.image-list,
.image-list > :deep(*) {
  margin: 0;
}

.traits-second-row {
  margin: -0.4em 0 0 1.018em;
}
</style>
