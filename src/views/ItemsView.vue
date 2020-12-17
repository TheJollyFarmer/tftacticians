<template>
  <VPage
    title="items"
    icon="khanda">
    <template #aside>
      <ItemsFilters
        :components="components"
        :combined="combined"/>
    </template>
    <ItemList :items="items"/>
  </VPage>
</template>

<script>
import ItemsFilters from "@/components/items/ItemFilters";
import ItemList from "@/components/items/ItemList";
import VPage from "@/components/utility/VPage";
import { mapGetters } from "vuex";

export default {
  name: "ItemsView",

  components: { ItemsFilters, ItemList, VPage },

  computed: mapGetters("items", {
    items: "getItems",
    components: "getComponents",
    combined: "getCombined"
  })
};
</script>
