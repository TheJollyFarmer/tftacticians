<template>
  <CompositionSection title="carousel">
    <div class="carousel-items">
      <template
        v-for="(item, index) in items"
        :key="index">
        <ItemLink
          :id="item.component"
          :carousel="item.item"/>
        <VArrow v-if="index !== 2"/>
      </template>
    </div>
  </CompositionSection>
</template>

<script>
import CompositionSection from "@/components/compositions/sections/CompositionSection";
import ItemLink from "@/components/items/ItemLink";
import VArrow from "@/components/utility/VArrow";

export default {
  name: "CompositionSectionCarousel",

  components: { CompositionSection, ItemLink, VArrow },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.carousel-items {
  align-items: center;
  display: flex;
  margin-bottom: 0.25em;
}
</style>
