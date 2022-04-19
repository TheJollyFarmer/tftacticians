<template>
  <article class="summoner-trend layer">
    <h3> {{ title }} </h3>
    <SummonerTrendItem
      v-for="(datum, index) in data"
      :id="datum[0]"
      :key="index"
      :position="index + 1"
      :name="datum[0]"
      :count="datum[1].count || datum[1]"
      :starred="datum[1].starred"
      :component="component"/>
  </article>
</template>

<script>
import { defineAsyncComponent } from "vue";
import SummonerTrendItem from "@/components/summoner/SummonerTrendItem";

const ChampionLink = defineAsyncComponent(() =>
  import("@/components/champions/ChampionLink")
);

const ItemLink = defineAsyncComponent(() =>
  import("@/components/items/ItemLink")
);

const TraitLink = defineAsyncComponent(() =>
  import("@/components/traits/TraitLink")
);

export default {
  name: "SummonerTrend",

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
          return ChampionLink;

        case "items":
          return ItemLink;

        case "traits":
          return TraitLink;

        default:
          return "div";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-trend {
  align-items: unset;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  h3 {
    text-transform: uppercase;
  }
}
</style>
