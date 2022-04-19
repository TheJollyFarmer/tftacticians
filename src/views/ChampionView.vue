<template>
  <VPage>
    <ChampionNav :champion="champion.id"/>
    <template #aside>
      <ChampionPortraitSection
        :id="champion.id"
        :name="champion.name"/>
      <ChampionItemsSection :items="champion.items"/>
      <ChampionStatsSection :stats="stats"/>
    </template>
    <ChampionAbilitySection :champion="champion"/>
    <ChampionTraitsSection :traits="champion.traits"/>
  </VPage>
</template>

<script>
import ChampionAbilitySection from "@/components/champion/sections/ChampionAbilitySection";
import ChampionItemsSection from "@/components/champion/sections/ChampionItemsSection";
import ChampionNav from "@/components/champion/ChampionNav";
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
    ChampionNav,
    ChampionPortraitSection,
    ChampionStatsSection,
    ChampionTraitsSection,
    VPage
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters("champions", ["getChampionByName"]),

    champion() {
      return this.getChampionByName(this.name);
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
