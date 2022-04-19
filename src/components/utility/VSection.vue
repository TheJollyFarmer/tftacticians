<template>
  <TransitionFade>
    <section
      :key="title"
      class="surface">
      <VHeader
        :text="title"
        type="2"/>
      <slot/>
    </section>
  </TransitionFade>
</template>

<script>
import TransitionFade from "@/components/transitions/TransitionFade";
import VHeader from "@/components/utility/VHeader";

export default {
  name: "VSection",

  components: { TransitionFade, VHeader },

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
