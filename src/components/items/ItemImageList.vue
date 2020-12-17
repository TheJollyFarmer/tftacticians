<template>
  <div class="image-list">
    <!--Item is on one occasion an object and not a string.-->
    <Item
      v-for="(item, index) in items"
      :key="index"
      :name="item.component || item"
      :carousel="item.item"
      :dimension="dimension"
      :has-popover="hasPopovers"/>
  </div>
</template>

<script>
import Item from "@/components/items/ItemImage";

export default {
  name: "ItemImageList",

  components: { Item },

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

    hasPopovers: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>
