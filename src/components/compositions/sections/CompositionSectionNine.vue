<template>
  <CompositionSection
    v-if="champion"
    title="level 9">
    <Champion :id="champion"/>
  </CompositionSection>
</template>
<script>
import Champion from "@/components/champions/Champion";
import CompositionSection from "@/components/compositions/sections/CompositionSection";

export default {
  name: "CompositionSectionNine",

  components: { Champion, CompositionSection },

  props: {
    champion: {
      type: String,
      required: true
    }
  }
};
</script>
