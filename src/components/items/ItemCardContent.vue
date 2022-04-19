<template>
  <div class="item-card-content">
    <ItemCardHead :item="item"/>
    <ItemBody :item="item"/>
  </div>
</template>

<script>
import ItemCardHead from "@/components/items/ItemCardHead";
import ItemBody from "@/components/items/ItemBody";

export default {
  name: "ItemCardContent",

  components: { ItemBody, ItemCardHead },

  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.item-card-content {
  margin-bottom: $spacing-small;
  max-width: 350px;
  padding: $spacing-small;

  &:last-child {
    margin: 0;
  }
}
</style>
