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
  width: 50px;

  .progress-bar {
    background-color: $white;
    backface-visibility: hidden;
    border: 2px solid $grey-dark;
    border-radius: 5px;
    flex: 33%;
    height: 100%;
    margin: 0 0.5px;
    box-shadow: $shadow;
  }
  .is-active {
    background-color: $grey-dark;
  }
}
</style>
