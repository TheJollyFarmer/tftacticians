<template>
  <dl class="placement-stat">
    <dt class="is-capitalized">
      {{ label }}
    </dt>
    <dd v-text="stat"/>
  </dl>
</template>

<script>
export default {
  name: "SummonerPlacementStat",

  props: {
    label: {
      type: String,
      required: true
    },

    stat: {
      type: [String, Number],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.placement-stat {
  font-size: 0.9em;
  text-align: center;
  width: 33%;

  dd {
    color: $primary;
    font-size: 1.2em;
    font-weight: bold;
    text-shadow: $shadow;
  }
}
</style>
