<template>
  <div class="stat">
    <div class="stat-value">
      <span>{{ label }}</span>
      <span>{{ rateText }}</span>
    </div>
    <progress
      class="progress is-small is-primary"
      :value="rateValue"
      :max="maxValue"/>
  </div>
</template>

<script>
export default {
  name: "SummonerStat",

  props: {
    label: {
      type: String,
      required: true
    },

    value: {
      type: String,
      required: true
    }
  },

  computed: {
    isAverage() {
      return this.label === "average";
    },

    maxValue() {
      return this.isAverage ? 8 : 100;
    },

    rateText() {
      return this.value + (this.isAverage ? "" : "%");
    },

    rateValue() {
      return this.isAverage ? 8 - this.value : this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.stat {
  align-items: center;
  display: flex;
  flex: 1 0 50%;
  justify-content: space-between;
  padding: 0.5em;
  font-size: 0.95em;
  flex-direction: column;

  .stat-value {
    align-items: center;
    display: flex;
    font-size: 0.9em;
    justify-content: space-between;
    margin-bottom: 0.2em;
    text-transform: capitalize;
    width: 100%;

    span:last-of-type {
      font-size: 0.9em;
      font-weight: bold;
    }
  }

  .progress {
    box-shadow: $shadow;
    height: 0.2em;

    &::-webkit-progress-value {
      background-color: var(--primary);
    }
  }
}
</style>
