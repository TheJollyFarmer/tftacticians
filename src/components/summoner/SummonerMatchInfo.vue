<template>
  <div class="match-info">
    <span
      class="match-placement"
      v-text="placement"/>
    <span v-text="type"/>
    <span v-text="length"/>
    <span v-text="time"/>
  </div>
</template>

<script>
import { formatDate, formatTime } from "@/utils/time";

export default {
  name: "MatchInfo",

  props: {
    match: {
      type: Object,
      required: true
    },

    placement: {
      type: Number,
      required: true
    }
  },

  computed: {
    type() {
      return this.match.queue === 1100 ? "Ranked" : "Normal";
    },

    length() {
      return formatTime(this.match.length);
    },

    time() {
      return formatDate(this.match.time);
    }
  }
};
</script>

<style lang="scss" scoped>
.match-info {
  display: flex;
  flex-direction: column;
  width: 4.37em;

  .match-placement {
    font-size: 1.2em;
    font-weight: bold;
  }
}
</style>
