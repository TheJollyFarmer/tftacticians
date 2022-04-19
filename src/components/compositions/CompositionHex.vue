<template>
  <VRouterLink :to="view">
    <VHex
      :class="borderColour"
      :style="background"
      @mouseenter="displayPopover"
      @mouseleave="hidePopover"/>
  </VRouterLink>
</template>

<script>
import Champion from "@/mixins/Champion";
import VHex from "@/components/utility/VHex";
import VRouterLink from "@/components/utility/VRouterLink";

export default {
  name: "CompositionHex",

  components: { VRouterLink, VHex },

  mixins: [Champion],

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    background() {
      let champion = `/${this.id}.png`;
      let image = require("@/assets/images/" + this.directory + champion);

      return { backgroundImage: "url(" + image + ")" };
    }
  }
};
</script>
