<template>
  <div>
    <VImage
      :image="trait"
      :has-border="false"
      :dimension="dimension"
      :dir="'traits/' + set"/>
    <span
      v-show="caption"
      v-text="trait"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";
import { mapGetters } from "vuex";

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
      default: "24"
    }
  },

  computed: mapGetters({ set: "getActiveSet" })
};
</script>
