<template>
  <transition-fade :duration="0.2">
    <span
      :key="icon"
      :class="['icon', iconSize]">
      <i :class="['fa' + type, iconType]"/>
      <slot/>
    </span>
  </transition-fade>
</template>

<script>
import TransitionFade from "../transitions/TransitionFade";

export default {
  name: "VFavicon",

  components: { TransitionFade },

  props: {
    icon: {
      type: String,
      required: true
    },

    size: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "s"
    }
  },

  computed: {
    iconType() {
      return "fa-" + this.icon;
    },

    iconSize() {
      return this.size ? "is-" + this.size : "";
    }
  }
};
</script>
