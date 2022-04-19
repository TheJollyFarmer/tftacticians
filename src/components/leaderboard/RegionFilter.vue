<template>
  <VFilter
    v-slot="{ option }"
    :options="regions"
    is-active
    label="regions">
    <VFilterOption
      :key="option.value"
      :option="option.value"
      :has-checkbox="false"
      :is-active="isActive(option.value)"
      @set="setEvent(option.value)">
      <RouterLink :to="{ params: { region: option.value } }">
        <RegionImage :option="option"/>
      </RouterLink>
    </VFilterOption>
  </VFilter>
</template>

<script>
import regions from "@/constants/regions";
import VFilter from "@/components/utility/VFilter";
import VFilterOption from "@/components/utility/VFilterOption";
import RegionImage from "@/components/leaderboard/RegionImage";

export default {
  name: "RegionFilter",

  components: {
    RegionImage,
    VFilterOption,
    VFilter
  },

  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },

  emits: ["update:modelValue"],

  data() {
    return {
      regions
    };
  },

  methods: {
    setEvent(region) {
      this.$emit("update:modelValue", region);
    },

    isActive(region) {
      return region === this.modelValue;
    }
  }
};
</script>

<style lang="scss" scoped>
:deep(.filter-list) {
  align-items: center;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
  padding: 0.5em 1em;

  .filter-option-image {
    margin: 0;

    a {
      align-items: center;
      color: var(--colour);
      display: flex;
      margin: 0;
      line-height: 1;
      text-transform: uppercase;

      &:hover,
      &.is-active {
        .image {
          border-color: var(--primary);
        }

        span {
          color: var(--primary);
          transition: color $hover-out;
        }
      }

      span {
        transition: color $hover-in;
      }
    }

    .image {
      background-color: $black;
      border-color: var(--colour);
      margin-right: 0.75em;
      overflow: hidden;

      :deep(img) {
        transform: translateY(-12%) scale(0.8);
      }
    }
  }
}
</style>
