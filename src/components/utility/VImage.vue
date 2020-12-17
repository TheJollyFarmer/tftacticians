<template>
  <figure
    :class="['image', isSize, border]"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave">
    <img
      :class="rounded"
      :src="createUrl(image)"
      :alt="image">
  </figure>
</template>

<script>
import filters from "@/utils/filters";

export default {
  name: "VImage",

  props: {
    image: {
      type: String,
      required: true
    },

    dir: {
      type: String,
      required: true
    },

    isRound: {
      type: Boolean,
      required: false,
      default: true
    },

    dimension: {
      type: String,
      required: false,
      default: "48"
    },

    hasBorder: {
      type: Boolean,
      required: false,
      default: true
    },

    hoverable: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    isSize() {
      return `is-${this.dimension}x${this.dimension}`;
    },

    border() {
      return { "has-border": this.hasBorder };
    },

    rounded() {
      return { "is-rounded": this.isRound };
    }
  },

  methods: {
    createUrl() {
      let name = filters.cleanPath(this.image);

      return require(`@/assets/images/${this.dir}/${name}.png`);
    },

    mouseenter() {
      if (this.hoverable) this.$emit("mouseenter");
    },

    mouseleave() {
      if (this.hoverable) this.$emit("mouseleave");
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &.has-border {
    background-color: black;
    border-style: solid;
    border-width: 2px;
    box-shadow: $shadow;
    padding: 1px;
  }

  &:hover {
    border-color: $primary !important;
    transition: border 0.3s ease-in-out;
  }
}
</style>
