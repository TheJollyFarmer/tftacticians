<template>
  <li class="champion-stat">
    <StatImage :stat="stat"/>
    <ChampionStatValues :stat="stat"/>
  </li>
</template>
<script>
import ChampionStatValues from "@/components/champion/ChampionStatValues";
import StatImage from "@/components/champion/StatImage";

export default {
  name: "ChampionStat",

  components: {
    StatImage,
    ChampionStatValues
  },

  props: {
    stat: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.champion-stat {
  display: flex;
  font-weight: bold;
  padding-bottom: 0.75em;

  .image {
    cursor: pointer;
    margin-right: 1em;
  }
}
</style>
