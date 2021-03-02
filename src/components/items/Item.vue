<template>
  <div class="item">
    <ItemImage :name="item.name"/>
    <VFavicon icon="arrow-right"/>
    <ItemImageList
      :items="components"
      dimension="32"/>
    <p v-text="item.description"/>
  </div>
</template>

<script>
import ItemImage from "@/components/items/ItemImage";
import ItemImageList from "@/components/items/ItemImageList";
import VFavicon from "@/components/utility/VFavicon";
import { mapGetters } from "vuex";

export default {
  name: "Item",

  components: {
    ItemImage,
    ItemImageList,
    VFavicon
  },

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
.item {
  align-items: center;
  border-radius: 3px;
  box-shadow: $shadow;
  display: flex;
  flex: 1;
  margin-bottom: 0.2em;
  padding: 0.375rem 0.5rem;

  .icon {
    flex-shrink: 0;
  }

  p {
    font-size: 0.875em;
    margin: 0 0 0 1em;
  }
}
</style>
