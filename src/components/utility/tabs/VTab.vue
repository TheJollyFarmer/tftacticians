<template>
  <TransitionTabSlide :type="transitionType">
    <div v-show="isActive">
      <slot/>
    </div>
  </TransitionTabSlide>
</template>

<script>
import TransitionTabSlide from "../../transitions/TransitionTabSlide";

export default {
  name: "VTab",

  components: { TransitionTabSlide },

  props: {
    icon: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: true
    },

    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      isActive: false,
      transitionType: ""
    };
  },

  created() {
    this.$parent.tabs.push(this);
    this.isActive = this.selected;
  }
};
</script>
