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
      default: 5
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
  height: 1em;
  flex-direction: row-reverse;

  .progress-bar {
    background-color: var(--layer);
    backface-visibility: hidden;
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow);
    width: 3px;
    height: 100%;
    margin: 0 0.15em;
  }
  .is-active {
    background-color: var(--primary);
  }
}
</style>
