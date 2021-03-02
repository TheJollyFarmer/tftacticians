<template>
  <ChampionSection title="items">
    <ItemImageList :items="items"/>
  </ChampionSection>
</template>

<script>
import ChampionSection from "@/components/champion/sections/ChampionSection";
import ItemImageList from "@/components/items/ItemImageList";

export default {
  name: "ChampionItemsSection",

  components: { ChampionSection, ItemImageList },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.image-list {
  width: 100%;
  justify-content: space-evenly;
}
</style>
