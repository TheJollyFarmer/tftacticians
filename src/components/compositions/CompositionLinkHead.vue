<template>
  <div class="composition-head">
    <div :class="['composition-rating', rating]">
      {{ composition.rating }}
    </div>
    <div class="composition-description">
      <div>{{ composition.name }}</div>
      <div>{{ composition.type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompositionLinkHead",

  props: {
    composition: {
      type: Object,
      required: true
    }
  },

  computed: {
    rating() {
      return this.composition.rating === "S"
        ? ""
        : "is-" + this.composition.rating.toLowerCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.composition-head {
  align-items: center;
  display: flex;
  color: var(--colour);

  .composition-rating {
    align-items: center;
    background-color: var(--primary);
    border-radius: $radius;
    box-shadow: $shadow;
    color: $white;
    display: flex;
    font-weight: bold;
    height: 2.5em;
    justify-content: center;
    margin-right: 1em;
    width: 2.5em;

    &.is-a {
      background-color: var(--secondary);
    }

    &.is-b {
      background-color: var(--tertiary);
    }
  }

  .composition-description {
    margin-right: 1em;
    font-size: 0.85em;

    :last-child {
      font-size: 0.75rem;
    }
  }
}
</style>
