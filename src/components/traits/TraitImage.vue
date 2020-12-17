<template>
  <div class="">
    <v-image
      :image="trait"
      :has-border="false"
      :dimension="dimension"
      dir="traits"/>
    <span
      v-show="caption"
      v-text="trait"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "TraitImage",

  components: { VImage },

  props: {
    trait: {
      type: String,
      required: true
    },

    caption: {
      type: Boolean,
      required: false,
      default: false
    },

    dimension: {
      type: String,
      required: false,
      default: "26"
    }
  }
};
</script>

<style lang="scss" scoped>
.champion-card-trait {
  align-items: center;
  display: flex;
  padding: 0.1em;

  .media {
    height: 48px;
  }
  .image {
    margin-right: 0.5em;
  }

  span {
    line-height: 1;
  }
}
</style>
