<template>
  <VImageList
    v-slot="{ item }"
    class="is-flex-direction-column"
    :collection="items">
    <Item
      :key="item.id"
      :item="item"/>
  </VImageList>
</template>

<script>
import Item from "@/components/items/Item";
import VImageList from "@/components/utility/VImageList";

export default {
  name: "ItemList",

  components: { Item, VImageList },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
