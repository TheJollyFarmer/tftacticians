<template>
  <section class="champion-section">
    <VHeader
      :text="title"
      type="2"/>
    <slot/>
  </section>
</template>

<script>
import VHeader from "@/components/utility/VHeader";

export default {
  name: "ChampionSection",

  components: { VHeader },

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.champion-section {
  margin-bottom: 1.81em;
}
</style>
