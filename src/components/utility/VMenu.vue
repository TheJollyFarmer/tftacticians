<template>
  <section class="menu">
    <VHeader :text="title"/>
    <ul class="menu-list is-relative">
      <slot/>
    </ul>
  </section>
</template>

<script>
import VHeader from "@/components/utility/VHeader";

export default {
  name: "VMenu",

  components: { VHeader },

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
