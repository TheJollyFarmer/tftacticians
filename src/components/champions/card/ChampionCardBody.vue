<template>
  <div class="champion-card-body">
    {{ champion.name }}
    <ChampionCost :cost="champion.cost"/>
  </div>
</template>

<script>
import ChampionCost from "@/components/champions/ChampionCost";

export default {
  name: "ChampionCardBody",

  components: { ChampionCost },

  props: {
    champion: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.champion-card-body {
  align-items: center;
  background-color: var(--layer);
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  padding: $spacing-small;

  .champion-cost {
    margin-right: -$spacing;
  }
}
</style>
