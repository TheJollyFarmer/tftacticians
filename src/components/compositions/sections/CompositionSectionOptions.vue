<template>
  <CompositionSection
    v-if="hasOptions"
    title="options">
    <CompositionNine :champion="options.nine"/>
    <CompositionAlternative
      v-for="(alternative, index) in options.alternatives"
      :key="index"
      :alternative="alternative"/>
  </CompositionSection>
</template>

<script>
import CompositionAlternative from "@/components/compositions/CompositionAlternative";
import CompositionNine from "@/components/compositions/sections/CompositionNine";
import CompositionSection from "@/components/compositions/sections/CompositionSection";

export default {
  name: "CompositionSectionOptions",

  components: {
    CompositionAlternative,
    CompositionNine,
    CompositionSection
  },

  props: {
    options: {
      type: Object,
      required: true
    }
  },

  computed: {
    hasOptions() {
      return this.options.nine || this.options.alternatives.length;
    }
  }
};
</script>
