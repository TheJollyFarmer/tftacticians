<template>
  <VFilter :label="label">
    <VFilterOption
      v-for="trait in collection"
      :key="trait.name"
      :option="trait.name"
      :is-active="isActive(trait.name)"
      @add="addFilterEvent"
      @remove="removeFilterEvent">
      <VImage
        :image="trait.name"
        :has-border="false"
        :dir="'traits/' + set"
        dimension="24"/>
      <span v-text="trait.name"/>
    </VFilterOption>
  </VFilter>
</template>

<script>
import Filter from "@/mixins/Filter";
import VFilter from "@/components/utility/VFilter";
import VFilterOption from "@/components/utility/VFilterOption";
import VImage from "@/components/utility/VImage";
import { mapGetters } from "vuex";

export default {
  name: "ChampionsTraitFilter",

  components: {
    VFilter,
    VFilterOption,
    VImage
  },

  mixins: [Filter],

  computed: mapGetters({
    isActive: "champions/isActiveItem",
    set: "getActiveSet"
  })
};
</script>
