<template>
  <VMediaObject
    :has-wrap="true"
    :is-v-centered="false">
    <template #mediaLeft>
      <Item
        :name="item.name"
        :has-popover="false"
        dimension="44"/>
    </template>
    <ItemCardHead :item="item"/>
    <ItemImageList
      :items="items"
      :has-popovers="false"
      dimension="30"/>
  </VMediaObject>
</template>

<script>
import Item from "@/components/items/ItemImage";
import ItemCardHead from "@/components/items/ItemCardHead";
import ItemImageList from "@/components/items/ItemImageList";
import VMediaObject from "@/components/utility/VMediaObject";
import { mapGetters } from "vuex";

export default {
  name: "ItemCard",

  components: {
    Item,
    ItemCardHead,
    ItemImageList,
    VMediaObject
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters("items", ["getItem", "getComponentItems"]),

    item() {
      return this.getItem(this.name);
    },

    items() {
      return this.item.components || this.componentItems;
    },

    componentItems() {
      return this.getComponentItems({
        item: this.item.name,
        type: "component"
      }).map(item => item.name);
    }
  }
};
</script>

<style scoped>
.image-list {
  margin-left: -0.2em;
}
</style>
