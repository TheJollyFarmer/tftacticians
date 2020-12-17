<template>
  <ul class="hex-grid">
    <template v-for="(hex, index) in hexGrid">
      <CompositionHex
        v-if="hex.name"
        :key="index"
        :name="hex.name"
        :position="hex.position"
        :hex="hex.hex"/>
      <VHex
        v-else
        :key="index"/>
    </template>
  </ul>
</template>

<script>
import CompositionHex from "@/components/compositions/CompositionHex";
import VHex from "@/components/utility/VHex";

export default {
  name: "VHexGrid",

  components: { CompositionHex, VHex },

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

  computed: {
    hexGrid() {
      let grid = [];

      for (let hex = 1; hex <= 28; hex++) {
        grid.push({
          hex,
          ...this.champion(hex)
        });
      }

      return grid;
    }
  },

  methods: {
    champion(hex) {
      let champion = this.champions.find(champion => champion.position === hex);

      return champion !== undefined
        ? champion
        : {
            name: "",
            position: 0
          };
    }
  }
};
</script>

<style scoped>
.hex-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 0 3.75em;
  max-width: 350px;
  overflow: hidden;
  padding: 3% 0;
  width: 100%;
}
</style>
