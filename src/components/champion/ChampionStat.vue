<template>
  <li class="champion-stat">
    <StatImage :stat="stat"/>
    <VDash/>
    <TransitionFade>
      <ChampionStatValues
        :key="$route.path"
        :stat="stat"/>
    </TransitionFade>
  </li>
</template>

<script>
import StatImage from "@/components/StatImage";
import ChampionStatValues from "@/components/champion/ChampionStatValues";
import TransitionFade from "@/components/transitions/TransitionFade";
import VDash from "@/components/utility/VDash";

export default {
  name: "ChampionStat",

  components: {
    StatImage,
    ChampionStatValues,
    TransitionFade,
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

  & + .champion-stat {
    padding-top: 0.75em;
  }

  .image {
    cursor: pointer;
  }
}
</style>
