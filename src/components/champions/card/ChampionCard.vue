<template>
  <div class="champion-card">
    <ChampionCardHead :champion="champion"/>
    <ItemLinkList
      :items="champion.items"
      :popovers="false"
      tooltips
      dimension="28"/>
    <ChampionCardBody :champion="champion"/>
  </div>
</template>

<script>
import ChampionCardBody from "@/components/champions/card/ChampionCardBody";
import ChampionCardHead from "@/components/champions/card/ChampionCardHead";
import ItemLinkList from "@/components/items/ItemLinkList";
import { mapGetters } from "vuex";

export default {
  name: "ChampionCard",

  components: {
    ChampionCardBody,
    ChampionCardHead,
    ItemLinkList
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters("champions", ["getChampion"]),

    champion() {
      return this.getChampion(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.champion-card {
  background-color: transparent;
  font-size: 0.9em;

  .image-list {
    align-items: center;
    background-color: var(--background);
    border: 1px solid var(--border);
    border-left-width: 0;
    border-right-width: 0;
    justify-content: space-between;
    margin: 0;
    padding: $spacing-small;
    width: 100%;

    :deep(.item-image) {
      margin-top: 0;
    }
  }
}
</style>
