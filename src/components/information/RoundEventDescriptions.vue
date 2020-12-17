<template>
  <div class="descriptions">
    <span
      v-for="description in descriptions"
      :key="description">
      {{ description }}
    </span>
  </div>
</template>

<script>
export default {
  name: "RoundEventDescriptions",

  props: {
    descriptions: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.descriptions {
  color: black;
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  flex-direction: column;
  font-size: 0.8em;
  min-width: 250px;

  & span:last-of-type {
    font-size: 0.95em;
    font-weight: bold;
  }
}
</style>
