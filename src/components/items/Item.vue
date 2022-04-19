<template>
  <div class="item layer">
    <ItemLink :id="item.id"/>
    <VArrow v-if="notComponentless"/>
    <ItemLinkList
      :items="components"
      dimension="32"/>
    <ItemBody :item="item"/>
  </div>
</template>

<script>
import ItemBody from "@/components/items/ItemBody";
import ItemLink from "@/components/items/ItemLink";
import ItemLinkList from "@/components/items/ItemLinkList";
import VArrow from "@/components/utility/VArrow";
import { mapGetters } from "vuex";

export default {
  name: "Item",

  components: {
    ItemBody,
    ItemLink,
    ItemLinkList,
    VArrow
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters("items", { filterItem: "getFilterItem" }),

    components() {
      return [...this.firstComponent, ...this.filterComponent];
    },

    filterComponent() {
      return this.item.components.filter(item => item === this.filterItem);
    },

    firstComponent() {
      return this.item.components.filter(item => item !== this.filterItem);
    },

    notComponentless() {
      return this.item.components.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  align-items: center;
  display: flex;
  flex: 1;
  padding: $spacing;
  will-change: transform;

  .item-body {
    margin-left: $spacing-large;
  }

  :deep(.item-image) {
    margin-right: $spacing-smallest;
  }
}
</style>
