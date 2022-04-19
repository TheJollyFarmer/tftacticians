<template>
  <div class="champion-card-head">
    <ChampionLink
      :id="champion.id"
      :popover="false"
      dimension="48"/>
    <div>
      <TraitImage
        v-for="trait in traits"
        :key="trait"
        :trait="trait"
        caption
        dimension="20"/>
    </div>
  </div>
</template>

<script>
import ChampionLink from "@/components/champions/ChampionLink";
import TraitImage from "@/components/traits/TraitImage";
import { mapGetters } from "vuex";

export default {
  name: "ChampionCardHead",

  components: {
    ChampionLink,
    TraitImage
  },

  props: {
    champion: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters("champions/traits", ["getTrait"]),

    traits() {
      return this.champion.traits.map(trait => this.getTrait(trait).name);
    }
  }
};
</script>

<style lang="scss" scoped>
.champion-card-head {
  align-items: center;
  background-color: var(--surface);
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
  display: flex;
  justify-content: space-between;
  padding: $spacing-small;

  .trait-image {
    flex-direction: row-reverse;
    font-size: 0.95em;
    font-weight: bold;
    padding-bottom: 0.4em;
    white-space: nowrap;

    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
