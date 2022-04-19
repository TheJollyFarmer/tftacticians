<template>
  <figure
    v-tooltip:[tipDir]="tooltipText"
    v-bind="$attrs"
    :class="classes"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave">
    <img
      ref="observer"
      :class="isRounded"
      :src="placeholder"
      :alt="image"
      @error="getAltUrl">
  </figure>
  <span
    v-if="caption"
    class="caption"
    v-text="label"/>
</template>

<script>
import Observer from "@/mixins/Observer";

export default {
  name: "VImage",

  mixins: [Observer],

  props: {
    image: {
      type: [Number, String],
      required: true
    },

    dir: {
      type: String,
      required: false,
      default: ""
    },

    external: {
      type: Boolean,
      required: false,
      default: false
    },

    url: {
      type: Boolean,
      required: false,
      default: false
    },

    label: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "png"
    },

    dimension: {
      type: String,
      required: false,
      default: "48"
    },

    tipDir: {
      type: String,
      required: false,
      default: "bottom"
    },

    isRound: {
      type: Boolean,
      required: false,
      default: true
    },

    caption: {
      type: Boolean,
      required: false,
      default: false
    },

    tooltip: {
      type: Boolean,
      required: false,
      default: false
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
    },

    error: {
      type: String,
      required: false,
      default: "default"
    }
  },

  emits: ["mouseenter", "mouseleave"],

  data() {
    return {
      src: ""
    };
  },

  computed: {
    placeholder() {
      return document.createElement("canvas").toDataURL();
    },

    classes() {
      return [
        "image",
        `is-${this.dimension}x${this.dimension}`,
        {
          "has-border": this.hasBorder,
          "is-svg": this.type === "svg"
        }
      ];
    },

    isRounded() {
      return { "is-rounded": this.isRound };
    },

    tooltipText() {
      return this.tooltip ? this.label : "";
    }
  },

  watch: {
    image() {
      this.$refs.observer.src = this.createUrl();
    }
  },

  methods: {
    executeObserver() {
      this.$refs.observer.src = this.createUrl();
      this.observer.disconnect();
    },

    createUrl() {
      return this.external
        ? this.url
          ? this.getExtUrl()
          : this.getS3Url()
        : this.getLocalUrl();
    },

    getExtUrl() {
      return process.env.VUE_APP_DD_URL + this.image + ".png";
    },

    getS3Url() {
      return process.env.VUE_APP_S3_URL + this.image + ".png";
    },

    getLocalUrl() {
      return require(`@/assets/images/${this.dir}/${this.image}.${this.type}`);
    },

    getAltUrl({ target: img }) {
      img.src = require(`@/assets/images/error/${this.error}.png`);
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
  flex-shrink: 0;
  transition: border $hover-in;

  &:hover {
    border-color: var(--primary) !important;
    transition: border $hover-out;
  }

  &.has-border {
    background-color: var(--fill);
    border-style: solid;
    border-width: 2px;
    box-shadow: $shadow;
    padding: 1px;
  }

  &.is-svg {
    align-items: center;
    display: flex;
    justify-content: center;

    img {
      height: 100%;
    }
  }
}
</style>
