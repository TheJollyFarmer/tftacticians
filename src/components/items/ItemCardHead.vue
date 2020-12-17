<template>
  <section class="item-card-head">
    <h3> {{ item.name }} </h3>
    <div
      v-if="!isSpatula"
      class="item-card-stats">
      <ItemCardStat
        v-for="(stat, index) in item.stats"
        :key="index"
        :stat="stat"/>
    </div>
    <p v-if="isCombined || isSpatula">
      {{ item.description }}
    </p>
  </section>
</template>

<script>
import ItemCardStat from "@/components/items/ItemCardStat";

export default {
  name: "ItemCardHead",

  components: { ItemCardStat },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    isCombined() {
      return this.item.components;
    },

    isSpatula() {
      return !this.item.stats;
    }
  }
};
</script>

<style lang="scss" scoped>
.item-card-head {
  font-size: 0.875em;
  margin: 0.12em 0 0.55em 0;
  max-width: 500px;

  .item-card-stats {
    align-items: center;
    display: flex;
    margin-bottom: 0.75em;
  }
}
</style>
