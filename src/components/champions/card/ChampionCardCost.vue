<template>
  <v-favicon
    class="champion-cost"
    icon="coins">
    <span>{{ cost }}</span>
  </v-favicon>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "ChampionCardCost",

  components: { VFavicon },

  props: {
    cost: {
      type: Number,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.champion-cost {
  color: gold;
  margin-left: 0.7em;
  span {
    color: black;
    margin: 0 0.5em 0 0.5em;
  }
}
</style>
