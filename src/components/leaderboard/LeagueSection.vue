<template>
  <VFilter
    v-slot="{ option }"
    :options="options"
    is-active
    label="leagues">
    <VFilterOption
      :key="option"
      :option="option"
      :is-active="modelValue === option"
      :has-checkbox="false"
      class="league"
      @set="addFilterEvent">
      <RouterLink :to="{ params: { league: option } }">
        <RankImage
          :league="option"
          dimension="48"/>
      </RouterLink>
    </VFilterOption>
  </VFilter>
</template>

<script>
import Filter from "@/mixins/Filter";
import RankImage from "@/components/leaderboard/LeagueImage";
import VFilterOption from "@/components/utility/VFilterOption";
import VFilter from "@/components/utility/VFilter";

export default {
  name: "LeagueSection",

  components: {
    VFilter,
    RankImage,
    VFilterOption
  },

  mixins: [Filter],

  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },

  emits: ["update:modelValue"],

  methods: {
    addFilterEvent(option) {
      this.$emit("update:modelValue", option);
    }
  }
};
</script>

<style lang="scss" scoped>
:deep(.filter-list) {
  display: flex;
  justify-content: space-between;
  padding: 1em;

  .league {
    align-items: center;
    background-color: var(--hover);
    border-radius: 5px;
    box-shadow: var(--shadow);
    padding: 1em;
    display: flex;
    justify-content: center;
    margin: 0;
    transition: $hover-in;
    width: 30%;

    &:hover {
      transition: $hover-out;
    }

    :deep(.image) {
      height: auto;
    }
  }
}
</style>
