<template>
  <span>
    {{ value }}
    <span v-if="isLast"> / </span>
  </span>
</template>

<script>
export default {
  name: "ChampionStatValue",

  props: {
    value: {
      type: Number,
      required: true
    },

    isLast: {
      type: Boolean,
      required: true
    }
  }
};
</script>
