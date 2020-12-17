<template>
  <div class="progress-bars">
    <VProgressBar
      v-for="position in range"
      :key="position"
      :progress="progress"
      :position="position"/>
  </div>
</template>

<script>
import VProgressBar from "@/components/utility/VProgressBar";

export default {
  name: "VProgressBars",

  components: { VProgressBar },

  props: {
    max: {
      type: Number,
      required: false,
      default: 3
    },

    progress: {
      type: Number,
      required: true
    }
  },

  computed: {
    range() {
      return [...Array(this.max).keys()].map(i => i + 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bars {
  align-self: center;
  display: flex;
  height: 10px;
  margin-left: 0.4em;
  width: 50px;
  .progress-bar {
    background-clip: content-box;
    background-color: $grey-dark;
    backface-visibility: hidden;
    height: 100%;
    opacity: 0.2;
    padding-right: 4%;
    transform: skewX(-40deg);
    width: 33.3%;
  }
  .is-active {
    opacity: 1;
  }
}
</style>
