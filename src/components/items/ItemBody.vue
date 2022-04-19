<template>
  <div class="item-body">
    <p>
      <span v-if="item.isUnique">
        Unique:
      </span>
      {{ item.description }}
    </p>
    <p v-if="item.radiantBonus">
      <span>Radiant Bonus:</span> {{ item.radiantBonus }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ItemBody",

  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 0.9em;

  span {
    font-weight: bold;
  }
}
</style>
