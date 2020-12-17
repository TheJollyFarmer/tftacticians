<template>
  <ChampionSection title="traits">
    <Trait
      v-for="trait in champion.traits"
      :key="trait"
      :name="trait"/>
  </ChampionSection>
</template>

<script>
import ChampionSection from "@/components/champion/sections/ChampionSection";
import Trait from "@/components/traits/Trait";

export default {
  name: "ChampionTraitsSection",

  components: {
    ChampionSection,
    Trait
  },

  props: {
    champion: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.media + .media {
  border: none;
}
</style>
