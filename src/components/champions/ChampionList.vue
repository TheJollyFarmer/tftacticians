<template>
  <VImageList
    v-slot="{ item: champion }"
    :collection="champions">
    <ChampionLink
      :id="champion.id || champion"
      :starred="champion.starred"
      :items="champion.items"
      :dimension="dimension"
      :popover="popovers"
      :tooltip="tooltips"/>
  </VImageList>
</template>

<script>
import ChampionLink from "@/components/champions/ChampionLink";
import VImageList from "@/components/utility/VImageList";

export default {
  name: "ChampionList",

  components: { ChampionLink, VImageList },

  props: {
    champions: {
      type: [Array, Object],
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    popovers: {
      type: Boolean,
      required: false,
      default: true
    },

    tooltips: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
