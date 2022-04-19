<template>
  <VImage
    :image="stat.name"
    :label="tooltipText"
    :dimension="dimension"
    :has-border="false"
    :is-round="false"
    :tip-dir="tipDir"
    tooltip
    dir="stats"
    type="svg"/>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "StatImage",

  components: { VImage },

  props: {
    stat: {
      type: Object,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "24"
    },

    tipDir: {
      type: String,
      required: false,
      default: "left"
    }
  },

  computed: {
    tooltipText() {
      return this.stat.name === "dps" ? "DPS" : this.stat.name;
    }
  }
};
</script>
