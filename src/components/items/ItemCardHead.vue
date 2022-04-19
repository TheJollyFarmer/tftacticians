<template>
  <header class="item-card-head">
    <h3 v-text="item.name"/>
    <VImageList
      v-if="hasStats"
      v-slot="{ item: stat }"
      :collection="item.stats">
      <ItemCardStat :stat="stat"/>
    </VImageList>
  </header>
</template>

<script>
import ItemCardStat from "@/components/items/ItemCardStat";
import VImageList from "@/components/utility/VImageList";

export default {
  name: "ItemCardHead",

  components: { VImageList, ItemCardStat },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    hasStats() {
      return this.item.stats.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.item-card-head {
  font-size: 0.95em;
  margin-bottom: $spacing-small;
}
</style>
