<template>
  <CompositionSection title="traits">
    <TraitBadgeList :traits="traits"/>
  </CompositionSection>
</template>

<script>
import CompositionSection from "@/components/compositions/sections/CompositionSection";
import TraitBadgeList from "@/components/traits/TraitBadgeList";

export default {
  name: "CompositionSectionTraits",

  components: {
    CompositionSection,
    TraitBadgeList
  },

  props: {
    traits: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .trait-badge-container:first-of-type > .trait-badge {
  margin-left: 0;
}
</style>
