<template>
  <VHex
    :class="borderColour"
    :style="background"
    @mouseenter="displayPopover"
    @mouseleave="hidePopover"
    @click="goToChampionView"/>
</template>

<script>
import Champion from "@/mixins/Champion";
import filters from "@/utils/filters";
import VHex from "@/components/utility/VHex";

export default {
  name: "CompositionHex",

  components: { VHex },

  mixins: [Champion],

  props: {
    name: {
      type: String,
      required: true
    },

    position: {
      type: Number,
      required: true
    },

    hex: {
      type: Number,
      required: true
    }
  },

  computed: {
    background() {
      let name = filters.cleanPath(this.name);
      let image = require(`@/assets/images/champions/icons/${name}.png`);

      return { backgroundImage: "url(" + image + ")" };
    }
  }
};
</script>
