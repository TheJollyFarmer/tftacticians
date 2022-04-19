<template>
  <VList
    v-slot="{ item: champion }"
    :collection="champions"
    type="grid">
    <ChampionLink
      :id="champion.id"
      :key="champion.name"
      dimension="48"
      caption/>
  </VList>
</template>

<script>
import ChampionLink from "@/components/champions/ChampionLink";
import { defineAsyncComponent } from "vue";

const VList = defineAsyncComponent(() => import("@/components/utility/VList"));

export default {
  name: "ChampionGrid",

  components: { ChampionLink, VList },

  props: {
    champions: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.transition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  justify-items: center;
  overflow: hidden;
  row-gap: 0.5em;

  .champion {
    align-items: start;
    height: 5em;
    z-index: 1;

    .image {
      border-width: 3px;
    }

    :deep(.caption) {
      background-color: var(--layer);
      border-radius: $radius;
      box-shadow: $shadow;
      color: var(--colour);
      font-size: 0.7em;
      font-weight: $weight-bold;
      height: 48px;
      line-height: 1;
      margin: 0;
      overflow: hidden;
      padding: 2.5em 0.55em 0;
      position: absolute;
      text-align: center;
      text-overflow: ellipsis;
      top: 33%;
      transition: $hover-in, background-color 1s ease;
      white-space: nowrap;
      width: 100%;
      z-index: -1;

      &:hover {
        color: var(--primary);
        transition: $hover-out;
      }
    }
  }
}
</style>
