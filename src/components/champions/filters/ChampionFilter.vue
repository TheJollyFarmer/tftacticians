<template>
  <VFilter
    v-slot="{ option }"
    :options="options"
    :label="label"
    :is-active="active">
    <VFilterOption
      :key="option"
      :option="option"
      :is-active="isActive(option)"
      @add="addFilterEvent"
      @remove="removeFilterEvent">
      <slot :option="option"/>
    </VFilterOption>
  </VFilter>
</template>

<script>
import Filter from "@/mixins/Filter";
import VFilter from "@/components/utility/VFilter";
import VFilterOption from "@/components/utility/VFilterOption";
import { mapGetters } from "vuex";

export default {
  name: "ChampionFilter",

  components: {
    VFilter,
    VFilterOption
  },

  mixins: [Filter],

  computed: mapGetters("champions", ["isActive"])
};
</script>
