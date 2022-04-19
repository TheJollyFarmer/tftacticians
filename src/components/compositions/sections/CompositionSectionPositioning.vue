<template>
  <CompositionSection title="positioning">
    <CompositionHexGrid :champions="champions"/>
  </CompositionSection>
</template>

<script>
import CompositionHexGrid from "@/components/compositions/CompositionHexGrid";
import CompositionSection from "./CompositionSection";

export default {
  name: "CompositionSectionPositioning",

  components: {
    CompositionHexGrid,
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
