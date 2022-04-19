<template>
  <VSection title="regions">
    <article class="regions">
      <a
        v-for="region in regions"
        :key="region.name"
        :class="['region', isActive(region.name)]"
        @click="setEvent(region.name)">
        <RegionImage :region="region.name"/>
      </a>
    </article>
  </VSection>
</template>

<script>
import RegionImage from "@/components/leaderboard/RegionImage";
import VSection from "@/components/utility/VSection";
import { mapState } from "vuex";

export default {
  name: "RegionsSection",

  components: {
    RegionImage,
    VSection
  },

  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },

  emits: ["update:modelValue"],

  computed: mapState("summoner", ["regions"]),

  methods: {
    setEvent(region) {
      this.$emit("update:modelValue", region);
    },

    isActive(region) {
      return { "is-active": region === this.modelValue };
    }
  }
};
</script>

<style lang="scss" scoped>
.regions {
  align-items: center;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));

  .region {
    &:hover,
    &.is-active {
      :deep(.image) {
        border-color: var(--primary);
      }
    }
  }
}
</style>
