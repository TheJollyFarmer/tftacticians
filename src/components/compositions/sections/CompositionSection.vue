<template>
  <div class="composition-section">
    <div class="cs-title">
      {{ title }}
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "CompositionSection",

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.composition-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
  .cs-title {
    font-size: 0.9em;
    font-weight: bold;
    padding-bottom: 0.5em;
    text-transform: capitalize;
  }
}
</style>
