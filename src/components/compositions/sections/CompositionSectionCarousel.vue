<template>
  <CompositionSection title="carousel">
    <ItemImageList :items="items"/>
  </CompositionSection>
</template>

<script>
import CompositionSection from "@/components/compositions/sections/CompositionSection";
import ItemImageList from "@/components/items/ItemImageList";

export default {
  name: "CompositionSectionCarousel",

  components: { CompositionSection, ItemImageList },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
