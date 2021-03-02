<template>
  <ChampionSection title="ability">
    <ChampionAbility :champion="champion"/>
  </ChampionSection>
</template>

<script>
import ChampionAbility from "@/components/champion/ChampionAbility";
import ChampionSection from "@/components/champion/sections/ChampionSection";

export default {
  name: "ChampionAbilitySection",

  components: {
    ChampionAbility,
    ChampionSection
  },

  props: {
    champion: {
      type: Object,
      required: true
    }
  }
};
</script>
