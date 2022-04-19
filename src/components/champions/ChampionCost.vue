<template>
  <div class="champion-cost">
    <VImage
      :dimension="dimension"
      :has-border="false"
      :is-round="false"
      image="cost"
      dir="stats"
      type="svg"/>
    <span
      v-if="caption"
      class="caption"
      v-text="cost"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "ChampionCost",

  components: { VImage },

  props: {
    cost: {
      type: [String, Number],
      required: true
    },

    caption: {
      type: Boolean,
      required: false,
      default: true
    },

    dimension: {
      type: String,
      required: false,
      default: "20"
    }
  }
};
</script>
<style lang="scss" scoped>
.champion-cost {
  align-items: center;
  display: flex;
  font-weight: bold;
}
</style>
