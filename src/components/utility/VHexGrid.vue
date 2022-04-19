<template>
  <ul class="hex-grid">
    <template v-for="hex in hexGrid">
      <slot :hex="hex"/>
    </template>
  </ul>
</template>

<script>
export default {
  name: "VHexGrid",

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
        grid.push(hex);
      }

      return grid;
    }
  }
};
</script>

<style lang="scss" scoped>
.hex-grid {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 350px;
  overflow: hidden;
  width: 100%;
}
</style>
