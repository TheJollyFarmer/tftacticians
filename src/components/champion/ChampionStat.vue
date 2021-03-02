<template>
  <li class="champion-stat">
    <ChampionStatImage :stat="stat"/>
    <VDash/>
    <ChampionStatValues :stat="stat"/>
  </li>
</template>
<script>
import ChampionStatImage from "@/components/champion/ChampionStatImage";
import ChampionStatValues from "@/components/champion/ChampionStatValues";
import VDash from "@/components/utility/VDash";

export default {
  name: "ChampionStat",

  components: {
    ChampionStatImage,
    ChampionStatValues,
    VDash
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
  align-items: center;
  display: flex;
  font-weight: bold;
  padding-bottom: 0.75em;

  .image {
    cursor: pointer;
  }
}
</style>
