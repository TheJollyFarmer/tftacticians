<template>
  <VFilter
    :is-active="true"
    :label="label">
    <VFilterOption
      v-for="number in collection"
      :key="number"
      :option="number"
      :is-active="isActive(number)"
      @add="addFilterEvent"
      @remove="removeFilterEvent"/>
  </VFilter>
</template>

<script>
import Filter from "@/mixins/Filter";
import VFilter from "@/components/utility/VFilter";
import VFilterOption from "@/components/utility/VFilterOption";
import { mapGetters } from "vuex";

export default {
  name: "ChampionsCostFilter",

  components: { VFilter, VFilterOption },

  mixins: [Filter],

  computed: mapGetters("champions", {
    isActive: "isActiveItem"
  })
};
</script>
