<template>
  <VPage>
    <template #aside>
      <ChampionPortraitSection :name="champion.name"/>
      <ChampionItemsSection :items="champion.items"/>
      <ChampionStatsSection :stats="stats"/>
    </template>
    <ChampionAbilitySection :champion="champion"/>
    <ChampionTraitsSection :champion="champion"/>
  </VPage>
</template>

<script>
import ChampionAbilitySection from "@/components/champion/sections/ChampionAbilitySection";
import ChampionItemsSection from "@/components/champion/sections/ChampionItemsSection";
import ChampionPortraitSection from "@/components/champion/sections/ChampionPortraitSection";
import ChampionStatsSection from "@/components/champion/sections/ChampionStatsSection";
import ChampionTraitsSection from "@/components/champion/sections/ChampionTraitsSection";
import VPage from "@/components/utility/VPage";
import { mapGetters } from "vuex";

export default {
  name: "ChampionView",

  components: {
    ChampionAbilitySection,
    ChampionItemsSection,
    ChampionPortraitSection,
    ChampionStatsSection,
    ChampionTraitsSection,
    VPage
  },

  data() {
    return {
      name: this.$route.params.champion
    };
  },

  computed: {
    ...mapGetters("champions", ["getChampion"]),

    champion() {
      return this.getChampion(this.name);
    },

    stats() {
      return [this.cost, ...this.champion.stats];
    },

    cost() {
      return {
        name: "cost",
        values: this.champion.cost
      };
    }
  }
};
</script>
