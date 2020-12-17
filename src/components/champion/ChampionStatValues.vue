<template>
  <div v-if="values.length">
    <ChampionStatValue
      v-for="(value, index) in values"
      :key="index"
      :value="value"
      :is-last="isLastValue(index)"/>
  </div>
  <VProgressBars
    v-else-if="isRangeStat"
    :progress="values"/>
  <span
    v-else
    v-text="values"/>
</template>

<script>
import ChampionStatValue from "@/components/champion/ChampionStatValue";
import VProgressBars from "@/components/utility/VProgressBars";

export default {
  name: "ChampionStatValues",

  components: { ChampionStatValue, VProgressBars },

  props: {
    stat: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      values: this.stat.values
    };
  },

  computed: {
    isRangeStat() {
      return this.stat.name === "range";
    }
  },

  methods: {
    isLastValue(index) {
      return index !== this.values.length - 1;
    }
  }
};
</script>
