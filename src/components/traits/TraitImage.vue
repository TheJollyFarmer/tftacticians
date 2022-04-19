<template>
  <div class="trait-image">
    <VImage
      :image="image"
      :label="trait"
      :dimension="dimension"
      :caption="caption"
      :hoverable="hoverable"
      :has-border="false"
      :is-round="false"
      dir="traits"
      type="svg"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";
import { sanitise } from "@/utils/filters";

export default {
  name: "TraitImage",

  components: { VImage },

  props: {
    trait: {
      type: String,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "18"
    },

    caption: {
      type: Boolean,
      required: false,
      default: false
    },

    hoverable: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    image() {
      return sanitise(this.trait);
    }
  }
};
</script>

<style  lang="scss" scoped>
.trait-image {
  align-items: center;
  display: flex;
}
</style>
