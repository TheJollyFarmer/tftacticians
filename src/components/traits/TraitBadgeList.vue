<template>
  <div class="image-list">
    <TraitBadge
      v-for="(trait, index) in traits"
      :key="index"
      :name="trait.name"
      :count="trait.count"/>
  </div>
</template>

<script>
import TraitBadge from "@/components/traits/TraitBadge";

export default {
  name: "TraitBadgeList",

  components: { TraitBadge },

  props: {
    traits: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.image-list {
  padding-right: 0.125em;
}
</style>
