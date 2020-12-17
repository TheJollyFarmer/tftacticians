<template>
  <VImage
    v-tooltip:left="tooltipText"
    :has-border="false"
    :is-round="false"
    :dimension="dimension"
    :image="stat.name"
    dir="stats"/>
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
    }
  },

  computed: {
    tooltipText() {
      return this.stat.name === "dps" ? "DPS" : this.stat.name;
    }
  }
};
</script>
