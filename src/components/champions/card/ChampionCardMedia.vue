<template>
  <VMediaObject>
    <template #mediaLeft>
      <Champion
        :id="champion.id"
        :has-popover="false"
        caption
        dimension="48"/>
    </template>
    <TraitImage
      v-for="trait in champion.traits"
      :key="trait"
      :caption="true"
      :trait="trait"
      class="champion-card-trait"/>
    <template #mediaRight>
      <ChampionCardCost :cost="champion.cost"/>
    </template>
  </VMediaObject>
</template>

<script>
import Champion from "@/components/champions/Champion";
import ChampionCardCost from "@/components/champions/card/ChampionCardCost";
import TraitImage from "@/components/traits/TraitImage";
import VMediaObject from "@/components/utility/VMediaObject";

export default {
  name: "ChampionCardInfo",

  components: {
    Champion,
    ChampionCardCost,
    TraitImage,
    VMediaObject
  },

  props: {
    champion: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.champion-card-trait {
  align-items: center;
  display: flex;
  font-size: 0.9em;
  padding: 0.2em 0.4em 0.2em 0;
  white-space: nowrap;

  ::v-deep .image {
    margin-right: 0.5em;
  }

  ::v-deep span {
    line-height: 1;
  }
}
</style>
