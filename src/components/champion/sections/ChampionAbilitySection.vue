<template>
  <VSection title="ability">
    <ChampionAbility
      :key="champion.id"
      :champion="champion"/>
  </VSection>
</template>

<script>
import ChampionAbility from "@/components/champion/ChampionAbility";
import VSection from "@/components/utility/VSection";

export default {
  name: "ChampionAbilitySection",

  components: {
    ChampionAbility,
    VSection
  },

  props: {
    champion: {
      type: Object,
      required: true
    }
  }
};
</script>
