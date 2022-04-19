<template>
  <TransitionFade>
    <article
      :key="composition.name"
      class="composition">
      <CompositionSectionEarly :champions="composition.early"/>
      <CompositionSectionCarousel :items="composition.carousel"/>
      <CompositionSectionTraits :traits="composition.traits"/>
      <CompositionSectionOptions :options="composition.options"/>
      <CompositionSectionPositioning :champions="composition.champions"/>
    </article>
  </TransitionFade>
</template>

<script>
import CompositionSectionCarousel from "./CompositionSectionCarousel";
import CompositionSectionEarly from "./CompositionSectionEarly";
import CompositionSectionOptions from "./CompositionSectionOptions";
import CompositionSectionPositioning from "./CompositionSectionPositioning";
import CompositionSectionTraits from "./CompositionSectionTraits";
import TransitionFade from "@/components/transitions/TransitionFade";

export default {
  name: "Composition",

  components: {
    CompositionSectionOptions,
    CompositionSectionCarousel,
    CompositionSectionEarly,
    CompositionSectionPositioning,
    CompositionSectionTraits,
    TransitionFade
  },

  props: {
    composition: {
      type: Object,
      required: true
    }
  }
};
</script>
