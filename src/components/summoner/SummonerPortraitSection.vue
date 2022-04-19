<template>
  <VSection :title="summoner.name">
    <VImage
      :image="summoner.profileIconId"
      class="portrait"
      dimension="128"
      error="summoner"
      external
      url/>
  </VSection>
</template>

<script>
import VImage from "@/components/utility/VImage";
import VSection from "@/components/utility/VSection";

export default {
  name: "SummonerPortraitSection",

  components: { VImage, VSection },

  props: {
    summoner: {
      type: Object,
      required: true
    }
  }
};
</script>
