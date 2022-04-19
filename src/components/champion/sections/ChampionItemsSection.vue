<template>
  <VSection title="items">
    <ItemLinkList
      :key="$route.path"
      :items="items"/>
  </VSection>
</template>

<script>
import ItemLinkList from "@/components/items/ItemLinkList";
import VSection from "@/components/utility/VSection";

export default {
  name: "ChampionItemsSection",

  components: { ItemLinkList, VSection },

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
  justify-content: space-around;
}
</style>
