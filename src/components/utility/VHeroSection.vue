<template>
  <article
    :style="background"
    class="layer has-background">
    <h3>{{ title }}</h3>
    <slot/>
  </article>
</template>

<script>
export default {
  name: "VHeroSection",

  props: {
    title: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    }
  },

  computed: {
    background() {
      let image = require("@/assets/images/general/" + this.image + ".png");
      let grad = "linear-gradient(to left, transparent, var(--layer) 70%)";

      return { backgroundImage: grad + "," + "url(" + image + ")" };
    }
  }
};
</script>

<style lang="scss" scoped>
.layer {
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  transition: opacity $hover-in;

  &:hover {
    opacity: 0.9;
    transition: opacity $hover-out;
  }

  h3 {
    font-size: 1.25em;
  }

  :deep(span) {
    color: var(--primary);
  }
}
</style>
