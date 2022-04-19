<template>
  <VImageList
    v-slot="{ item }"
    :collection="items">
    <ItemLink
      :id="item.component || item"
      :carousel="item.item"
      :dimension="dimension"
      :popover="popovers"
      :tooltip="tooltips"/>
  </VImageList>
</template>

<script>
import ItemLink from "@/components/items/ItemLink";
import VImageList from "@/components/utility/VImageList";

export default {
  name: "ItemLinkList",

  components: { ItemLink, VImageList },

  props: {
    items: {
      type: [Array, Object],
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    popovers: {
      type: Boolean,
      required: false,
      default: true
    },

    tooltips: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
