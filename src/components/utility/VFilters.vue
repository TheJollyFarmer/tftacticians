<template>
  <section class="surface">
    <VHeader :text="title"/>
    <slot/>
  </section>
</template>

<script>
import VHeader from "@/components/utility/VHeader";

export default {
  name: "VFilters",

  components: { VHeader },

  props: {
    title: {
      type: String,
      required: false,
      default: "filters"
    }
  }
};
</script>
