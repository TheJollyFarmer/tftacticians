<template>
  <CompositionSection title="positioning">
    <VHexGrid :champions="champions"/>
  </CompositionSection>
</template>

<script>
import CompositionSection from "@/components/compositions/sections/CompositionSection";
import VHexGrid from "@/components/utility/VHexGrid";

export default {
  name: "CompositionSectionPositioning",

  components: { CompositionSection, VHexGrid },

  props: {
    champions: {
      type: Array,
      required: true
    }
  }
};
</script>
