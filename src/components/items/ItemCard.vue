<template>
  <VMediaObject
    :has-wrap="true"
    :is-v-centered="false"
    class="item-card">
    <template #mediaLeft>
      <ItemLink
        :id="item.id"
        :popover="false"
        dimension="44"/>
    </template>
    <ItemCardContent :item="item"/>
    <ItemLinkList
      v-if="items.length"
      :items="items"
      :popovers="false"
      tooltips
      dimension="30"/>
  </VMediaObject>
</template>

<script>
import ItemCardContent from "@/components/items/ItemCardContent";
import ItemLink from "@/components/items/ItemLink";
import ItemLinkList from "@/components/items/ItemLinkList";
import VMediaObject from "@/components/utility/VMediaObject";
import { mapGetters } from "vuex";

export default {
  name: "ItemCard",

  components: {
    ItemCardContent,
    ItemLink,
    ItemLinkList,
    VMediaObject
  },

  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },

  computed: {
    ...mapGetters("items", ["getItem", "getComponentItems"]),

    item() {
      return this.getItem(this.id);
    },

    items() {
      return this.item.components || this.componentItems;
    },

    componentItems() {
      return this.getComponentItems(this.id).map(item => item.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.item-card {
  background-color: var(--background);

  :deep(.media-left) {
    padding: $spacing-small;
    margin: 0 auto;
  }

  :deep(.media-content) {
    background-color: var(--layer);
    border-left: 1px solid var(--border);
    border-bottom-right-radius: $radius;
    border-top-right-radius: $radius;

    > .image-list {
      background-color: var(--surface);
      border-top: 1px solid var(--border);
      padding: 0 $spacing-small $spacing-small;
      border-bottom-right-radius: $radius;
    }
  }
}
</style>
