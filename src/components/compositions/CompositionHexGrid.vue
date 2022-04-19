<template>
  <article class="composition-positioning">
    <VHexGrid
      v-slot="{ hex }"
      :champions="champions">
      <CompositionHex
        v-if="hasChampion(hex)"
        :id="getProp(hex)"
        :key="hex"/>
      <VHex
        v-else
        :key="hex.hex"/>
    </VHexGrid>
  </article>
</template>

<script>
import CompositionHex from "@/components/compositions/CompositionHex";
import VHex from "@/components/utility/VHex";
import VHexGrid from "@/components/utility/VHexGrid";

export default {
  name: "CompositionHexGrid",

  components: { CompositionHex, VHex, VHexGrid },

  props: {
    champions: {
      type: Array,
      required: true
    },

    hexes: {
      type: Number,
      required: false,
      default: 28
    }
  },

  methods: {
    hasChampion(hex) {
      return this.champions.find(champion => champion.position === hex);
    },

    getProp(hex) {
      return this.hasChampion(hex).id;
    }
  }
};
</script>

<style lang="scss" scoped>
.composition-positioning {
  padding-left: 30px;

  .hex-grid {
    padding: 3% 0;

    div:nth-child(14n + 8),
    a:nth-child(14n + 8) {
      margin-left: 6.7%;
    }
  }
}
</style>
