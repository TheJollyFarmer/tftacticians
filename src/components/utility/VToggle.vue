<template>
  <transition-fade>
    <v-favicon
      size="small"
      :class="toggleClass"
      :type="iconType"
      icon="circle"/>
  </transition-fade>
</template>

<script>
import TransitionFade from "../transitions/TransitionFade";
import VFavicon from "./VFavicon";

export default {
  name: "VToggle",

  components: { TransitionFade, VFavicon },

  props: {
    classActive: {
      type: String,
      required: false,
      default: "is-circle-active"
    },

    classInactive: {
      type: String,
      required: false,
      default: "is-circle-inactive"
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    toggleClass() {
      return this.isActive ? this.classActive : this.classInactive;
    },

    iconType() {
      return this.isActive ? "s" : "r";
    }
  }
};
</script>

<style scoped lang="scss">
.is-circle-active,
.is-circle-inactive {
  margin-left: auto;
}

.is-circle-active:focus,
.is-circle-inactive:focus {
  box-shadow: none;
}

.is-circle-active {
  color: $primary;
}

.is-circle-inactive {
  color: $black;
}
</style>
