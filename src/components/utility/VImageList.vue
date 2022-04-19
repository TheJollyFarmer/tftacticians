<template>
  <div class="image-list">
    <slot
      v-for="(item, index) in collection"
      :item="item"
      :index="index"/>
  </div>
</template>

<script>
export default {
  name: "VImageList",

  props: {
    collection: {
      type: [Array, Object],
      required: false,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.image-list {
  display: flex;
  flex-shrink: 0;
  margin-top: -$spacing-small;

  > :slotted(*) {
    margin: $spacing-small $spacing-small 0 0;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
