<template>
  <VLevel class="item-list-item">
    <ItemImage :name="item.name"/>
    <p v-text="item.description"/>
    <template #levelRight>
      <ItemImageList :items="components"/>
    </template>
  </VLevel>
</template>

<script>
import ItemImage from "@/components/items/ItemImage";
import ItemImageList from "@/components/items/ItemImageList";
import VLevel from "@/components/utility/VLevel";
import { mapGetters } from "vuex";

export default {
  name: "Item",

  components: { ItemImage, ItemImageList, VLevel },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters("items", {
      filterItem: "getFilterItem"
    }),

    components() {
      return [...this.firstComponent(), ...this.filterComponent()];
    }
  },

  methods: {
    filterComponent() {
      return this.item.components.filter(item => item === this.filterItem);
    },

    firstComponent() {
      return this.item.components.filter(item => item !== this.filterItem);
    }
  }
};
</script>

<style lang="scss" scoped>
.item-list-item {
  margin-bottom: 0;
  padding: 0.375rem 0.5rem;

  ::v-deep .level-left {
    flex-shrink: 1;
  }

  p {
    font-size: 0.875em;
    margin: 0 1em 0;
    max-width: 650px;
  }

  &:hover {
    background-color: whitesmoke;
  }
}
</style>
