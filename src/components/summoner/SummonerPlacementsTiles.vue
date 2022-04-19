<template>
  <div class="placement-tiles">
    <SummonerPlacementsTile
      v-for="(placement, index) in placements"
      :key="index"
      :placement="placement"/>
  </div>
</template>

<script>
import SummonerPlacementsTile from "@/components/summoner/SummonerPlacementsTile";

export default {
  name: "SummonerPlacementsTiles",

  components: { SummonerPlacementsTile },

  props: {
    placements: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.placement-tiles {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 2em);
  grid-column-gap: 0.3em;
  grid-row-gap: 0.3em;
}
</style>
