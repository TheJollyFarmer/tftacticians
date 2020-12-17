<template>
  <VFilters :can-reset="false">
    <ItemFilter
      :collection="components"
      label="component"
      @apply="setFilter"/>
    <ItemFilter
      :collection="combined"
      label="combined"
      @apply="setFilter"/>
  </VFilters>
</template>

<script>
import ItemFilter from "@/components/items/ItemFilter";
import VFilters from "@/components/utility/VFilters";
import { mapActions } from "vuex";

export default {
  name: "ItemsFilter",

  components: { ItemFilter, VFilters },

  props: {
    components: {
      type: Array,
      required: true
    },

    combined: {
      type: Array,
      required: true
    }
  },

  destroyed() {
    this.resetFilter();
  },

  methods: mapActions("items", ["setFilter", "resetFilter"])
};
</script>
