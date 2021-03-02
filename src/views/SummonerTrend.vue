<template>
  <article class="summoner-trend">
    <h3> {{ title | capitalise }} </h3>
    <SummonerTrendItem
      v-for="(datum, index) in data"
      :key="index"
      :position="index + 1"
      :name="datum[0]"
      :count="datum[1]"
      :component="component"/>
  </article>
</template>

<script>
import filters from "@/utils/filters";
import Champion from "@/components/champions/Champion";
import ItemImage from "@/components/items/ItemImage";
import SummonerTrendItem from "@/views/SummonerTrendItem";
import TraitBadge from "@/components/traits/TraitBadge";

export default {
  name: "SummonerTrend",

  filters: {
    capitalise: filters.capitalise
  },

  components: { SummonerTrendItem },

  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },

    data: {
      type: Array,
      required: true
    }
  },

  computed: {
    component() {
      switch (this.title) {
        case "champions":
          return Champion;

        case "items":
          return ItemImage;

        case "traits":
          return TraitBadge;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-trend {
  display: flex;
  flex-direction: column;
}
</style>
