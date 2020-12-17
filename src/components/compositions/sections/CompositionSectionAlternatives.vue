<template>
  <CompositionSection
    v-if="alternatives.length"
    title="alternatives">
    <CompositionAlternative
      v-for="(alternative, index) in alternatives"
      :key="index"
      :alternative="alternative"/>
  </CompositionSection>
</template>

<script>
import CompositionAlternative from "@/components/compositions/CompositionAlternative";
import CompositionSection from "@/components/compositions/sections/CompositionSection";

export default {
  name: "CompositionSectionAlternatives",

  components: { CompositionAlternative, CompositionSection },

  props: {
    alternatives: {
      type: Array,
      required: true
    }
  }
};
</script>
