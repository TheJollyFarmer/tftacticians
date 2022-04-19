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
  margin-bottom: $spacing;

  &:last-child {
    margin: 0;
  }

  .cs-title {
    font-size: 0.9em;
    font-weight: bold;
    padding-bottom: $spacing-small;
    text-transform: capitalize;
  }

  @media only screen and (max-width: $widescreen) {
    flex: 2 1 33%;
    padding: $spacing;
    margin: 0;

    &:nth-child(-n + 3) {
      border-bottom: 1px solid var(--border);
      border-right: 1px solid var(--border);
    }

    &:nth-child(3) {
      border-right: none;
    }

    &:last-child {
      border-left: 1px solid var(--border);
    }
  }
}
</style>
