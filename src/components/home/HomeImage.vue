<template>
  <VImage
    :has-border="false"
    :is-round="false"
    :dimension="dimension"
    :image="image"
    dir="general"/>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "HomeImage",

  components: { VImage },

  props: {
    image: {
      type: String,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "400"
    }
  }
};
</script>
