<template>
  <CompositionSection title="traits">
    <TraitLinkList
      :traits="traits"
      has-labels/>
  </CompositionSection>
</template>

<script>
import CompositionSection from "@/components/compositions/sections/CompositionSection";
import TraitLinkList from "@/components/traits/TraitLinkList";

export default {
  name: "CompositionSectionTraits",

  components: {
    CompositionSection,
    TraitLinkList
  },

  props: {
    traits: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.image-list {
  justify-content: center;
}
</style>
