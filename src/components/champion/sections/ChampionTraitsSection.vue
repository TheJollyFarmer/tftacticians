<template>
  <VSection title="traits">
    <TraitList
      :key="$route.path"
      :traits="traits"/>
  </VSection>
</template>

<script>
import TraitList from "@/components/traits/TraitList";
import VSection from "@/components/utility/VSection";

export default {
  name: "ChampionTraitsSection",

  components: {
    TraitList,
    VSection
  },

  props: {
    traits: {
      type: Array,
      required: true
    }
  }
};
</script>
