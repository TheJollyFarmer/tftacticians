<template>
  <div class="column">
    <section class="composition">
      <VHeader :text="composition.name"/>
      <CompositionSectionEarly :champions="composition.early"/>
      <CompositionSectionCarousel :items="composition.carousel"/>
      <CompositionSectionTraits :traits="composition.traits"/>
      <CompositionSectionNine :champion="composition.nine"/>
      <CompositionSectionAlternatives :alternatives="composition.alternatives"/>
      <CompositionSectionPositioning :champions="composition.champions"/>
    </section>
  </div>
</template>

<script>
import CompositionSectionAlternatives from "@/components/compositions/sections/CompositionSectionAlternatives";
import CompositionSectionCarousel from "@/components/compositions/sections/CompositionSectionCarousel";
import CompositionSectionEarly from "@/components/compositions/sections/CompositionSectionEarly";
import CompositionSectionNine from "@/components/compositions/sections/CompositionSectionNine";
import CompositionSectionPositioning from "@/components/compositions/sections/CompositionSectionPositioning";
import CompositionSectionTraits from "@/components/compositions/sections/CompositionSectionTraits";
import VHeader from "@/components/utility/VHeader";

export default {
  name: "Composition",

  components: {
    CompositionSectionAlternatives,
    CompositionSectionCarousel,
    CompositionSectionEarly,
    CompositionSectionNine,
    CompositionSectionPositioning,
    CompositionSectionTraits,
    VHeader
  },

  props: {
    composition: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.composition {
  position: fixed;
  width: 34%;
  .heading {
    justify-content: center;
  }
}
</style>
