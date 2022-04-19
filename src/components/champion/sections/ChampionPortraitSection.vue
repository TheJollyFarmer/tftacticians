<template>
  <VSection :title="name">
    <VImage
      :key="name"
      :image="id"
      :class="['portrait', borderColour]"
      dimension="128"
      :dir="directory"/>
  </VSection>
</template>

<script>
import BorderColour from "@/mixins/BorderColour";
import VImage from "@/components/utility/VImage";
import VSection from "@/components/utility/VSection";
import { mapGetters } from "vuex";

export default {
  name: "ChampionPortraitSection",

  components: { VImage, VSection },

  mixins: [BorderColour],

  props: {
    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters({ set: "getActiveImageSet" }),

    directory() {
      return `champions/${this.set}/portraits`;
    }
  }
};
</script>
