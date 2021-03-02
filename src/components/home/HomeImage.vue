<template>
  <VImage
    :has-border="false"
    :is-round="false"
    :dimension="dimension"
    dir="layout"
    :image="image"/>
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
