<template>
  <ChampionSection title="stats">
    <ChampionStats :stats="stats"/>
  </ChampionSection>
</template>

<script>
import ChampionSection from "@/components/champion/sections/ChampionSection";
import ChampionStats from "@/components/champion/ChampionStats";

export default {
  name: "ChampionStatsSection",

  components: { ChampionSection, ChampionStats },

  props: {
    stats: {
      type: Array,
      required: true
    }
  }
};
</script>
