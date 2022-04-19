<template>
  <VImageList
    v-slot="{ item: trait }"
    :collection="traits"
    grid>
    <TraitLink
      :id="trait.id"
      :count="trait.count"
      :size="size"
      :label="hasLabels"/>
  </VImageList>
</template>

<script>
import TraitLink from "@/components/traits/TraitLink";
import VImageList from "@/components/utility/VImageList";

export default {
  name: "TraitLinkList",

  components: { TraitLink, VImageList },

  props: {
    traits: {
      type: Array,
      required: true
    },

    size: {
      type: String,
      required: false,
      default: ""
    },

    hasLabels: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped>
.image-list {
  flex-wrap: wrap;
}
</style>
