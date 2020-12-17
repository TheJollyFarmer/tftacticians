<template>
  <ChampionSection :title="name">
    <VImage
      :image="name"
      :class="['champion-portrait', borderColour]"
      dimension="128"
      size="3"
      dir="champions/portraits"/>
  </ChampionSection>
</template>

<script>
import BorderColour from "@/mixins/BorderColour";
import ChampionSection from "@/components/champion/sections/ChampionSection";
import VImage from "@/components/utility/VImage";

export default {
  name: "ChampionPortraitSection",

  components: { ChampionSection, VImage },

  mixins: [BorderColour],

  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.champion-portrait {
  margin: 0 auto;
}
</style>
