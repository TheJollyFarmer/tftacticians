<template>
  <TransitionFade>
    <header
      :key="text"
      :class="['heading', classes]">
      <VDivider>
        <component
          :is="elementType"
          v-text="text"/>
      </VDivider>
      <slot/>
    </header>
  </TransitionFade>
</template>

<script>
import VImage from "@/components/utility/VImage";
import VDivider from "@/components/utility/VDivider";
import TransitionFade from "@/components/transitions/TransitionFade";

export default {
  name: "VHeader",

  components: { TransitionFade, VDivider, VImage },

  props: {
    text: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "1"
    },

    size: {
      type: String,
      required: false,
      default: "4"
    }
  },

  computed: {
    elementType() {
      return `h${this.type}`;
    },

    classes() {
      return `is-size-${this.size}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  align-items: center;
  color: var(--colour);
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
  text-shadow: $shadow;
  position: relative;

  h1,
  h2 {
    align-items: center;
    font-weight: bold;
    line-height: normal;
    margin: 0 5px 0.1em;
  }
}
</style>
