<template>
  <v-image
    :dimension="dimension"
    :has-border="false"
    image="divider"
    dir="layout"/>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "VDivider",

  components: { VImage },

  props: {
    dimension: {
      type: String,
      required: false,
      default: "24"
    }
  }
};
</script>
