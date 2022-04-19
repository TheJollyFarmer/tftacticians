<template>
  <VFilters>
    <ItemSearch/>
    <Filter
      v-for="(filter, index) in filters"
      :key="index"
      v-bind="filter"
      :active="active"
      :class="$style.items"
      animatable>
      <template #link="{ option }">
        <ItemLink
          :id="option"
          dimension="34"/>
      </template>
    </Filter>
  </VFilters>
</template>

<script>
import Filter from "@/components/leaderboard/Filter";
import ItemLink from "@/components/items/ItemLink";
import ItemSearch from "@/components/items/ItemSearch";
import VFilters from "@/components/utility/VFilters";
import { mapGetters } from "vuex";

export default {
  name: "ItemFilters",

  components: {
    Filter,
    ItemLink,
    ItemSearch,
    VFilters
  },

  computed: {
    ...mapGetters("items", {
      components: "getComponents",
      combined: "getCombined",
      active: "getFilterItem"
    }),

    filters() {
      return [
        { label: "components", options: this.components },
        { label: "combined", options: this.combined }
      ];
    }
  }
};
</script>

<style lang="scss" module>
.items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(34px, 1fr));
  overflow: hidden;
  padding: $spacing-small;
  grid-gap: 0.5em;

  .error {
    margin: 1em;
  }
}
</style>
