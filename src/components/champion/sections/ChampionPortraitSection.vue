<template>
  <ChampionSection :title="name">
    <VImage
      :image="name"
      :class="['portrait', borderColour]"
      dimension="128"
      :dir="directory"/>
  </ChampionSection>
</template>

<script>
import BorderColour from "@/mixins/BorderColour";
import ChampionSection from "@/components/champion/sections/ChampionSection";
import VImage from "@/components/utility/VImage";
import { mapGetters } from "vuex";

export default {
  name: "ChampionPortraitSection",

  components: { ChampionSection, VImage },

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
    ...mapGetters({ set: "getActiveSet" }),

    directory() {
      return `champions/${this.set}/portraits`;
    }
  }
};
</script>
