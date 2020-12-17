<template>
  <CompositionSection title="early">
    <ChampionList :champions="champions"/>
  </CompositionSection>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import CompositionSection from "@/components/compositions/sections/CompositionSection";

export default {
  name: "CompositionSectionEarly",

  components: {
    ChampionList,
    CompositionSection
  },

  props: {
    champions: {
      type: Array,
      required: true
    }
  }
};
</script>
