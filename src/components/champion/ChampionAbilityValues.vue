<template>
  <div class="mb-1">
    <span v-text="data.name"/>:
    <span
      v-for="(descriptor, key) in description"
      :key="key"
      class="has-text-weight-bold">
      {{ descriptor }}
      <span v-if="key !== lastValue"> / </span>
    </span>
  </div>
</template>
<script>
export default {
  name: "ChampionAbilityBodyValues",

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      description: this.data.values
    };
  },

  computed: {
    lastValue() {
      return this.description.length - 1;
    }
  }
};
</script>
