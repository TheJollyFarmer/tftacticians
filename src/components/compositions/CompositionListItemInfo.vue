<template>
  <div class="composition-info">
    <div class="composition-rating">
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
  name: "CompositionListItemInfo",

  props: {
    composition: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.composition-info {
  align-items: center;
  display: flex;

  .composition-description {
    margin-right: 1.2em;

    :first-child {
      font-size: 0.85em;
      font-weight: bold;
    }

    :last-child {
      font-size: smaller;
    }
  }

  .composition-rating {
    align-items: center;
    background-color: $primary;
    border-radius: 3px;
    color: white;
    display: flex;
    font-weight: 600;
    height: 25px;
    justify-content: center;
    margin-right: 1.2em;
    padding: 1em;
    width: 25px;
  }
}
</style>
