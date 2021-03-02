<template>
  <div class="champion-cost">
    <VImage
      image="cost"
      dimension="24"
      dir="stats"
      :has-border="false"/>
    <span>{{ cost }}</span>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "ChampionCardCost",

  components: { VImage },

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
  align-items: center;
  display: flex;
  margin: 0 0.2em;
  span {
    font-size: 0.9em;
    line-height: 1;
    margin-left: 0.3em;
  }
}
</style>
