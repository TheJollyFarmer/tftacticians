<template>
  <VSection :title="name">
    <VImage
      :image="tier.toLowerCase()"
      :has-border="false"
      class="portrait"
      dimension="128"
      dir="ranked"/>
  </VSection>
</template>

<script>
import VSection from "@/components/utility/VSection";
import VImage from "@/components/utility/VImage";

export default {
  name: "SummonerPortraitSection",

  components: { VImage, VSection },

  props: {
    name: {
      type: String,
      required: true
    },

    tier: {
      type: String,
      required: true
    }
  }
};
</script>
