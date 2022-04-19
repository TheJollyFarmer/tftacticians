<template>
  <TransitionFade :duration="0.2">
    <span
      :key="icon"
      :class="['icon', iconSize]">
      <FontAwesomeIcon :icon="[type, icon]"/>
      <slot/>
    </span>
  </TransitionFade>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TransitionFade from "@/components/transitions/TransitionFade";

export default {
  name: "VFavicon",

  components: { FontAwesomeIcon, TransitionFade },

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
      default: "fas"
    }
  },

  computed: {
    iconSize() {
      return this.size ? "is-" + this.size : "";
    }
  }
};
</script>
