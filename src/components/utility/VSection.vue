<template>
  <section class="section">
    <VHeader
      :text="title"
      type="2"/>
    <slot/>
  </section>
</template>

<script>
import VHeader from "@/components/utility/VHeader";

export default {
  name: "VSection",

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
.section {
  padding: 0;
  margin-bottom: 1.81em;
}
</style>
