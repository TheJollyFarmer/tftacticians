<template>
  <VFilter
    is-active
    :label="label">
    <VFilterOption
      v-for="(item, index) in collection"
      :key="index"
      :option="item.name"
      :has-checkbox="false"
      :is-active="isActive(item.name)"
      @set="addFilterEvent">
      <Item
        :name="item.name"
        dimension="36"/>
    </VFilterOption>
  </VFilter>
</template>

<script>
import Filter from "@/mixins/Filter";
import Item from "@/components/items/ItemImage";
import VFilter from "@/components/utility/VFilter";
import VFilterOption from "@/components/utility/VFilterOption";
import { mapGetters } from "vuex";

export default {
  name: "ItemFilter",

  components: {
    Item,
    VFilter,
    VFilterOption
  },

  mixins: [Filter],

  computed: mapGetters("items", {
    isActive: "isActiveItem"
  })
};
</script>

<style scoped>
::v-deep .filter-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.5em;
}
</style>
