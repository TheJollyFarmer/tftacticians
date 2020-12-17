<template>
  <VMediaObject
    :is-v-centered="false"
    has-wrap
    class="champion-ability">
    <template #mediaLeft>
      <VImage
        :image="champion.name"
        dimension="44"
        dir="champions/spells"/>
    </template>
    <ChampionAbilityHead :ability="ability"/>
    <ChampionAbilityBody :ability="ability"/>
  </VMediaObject>
</template>

<script>
import ChampionAbilityBody from "@/components/champion/ChampionAbilityBody";
import ChampionAbilityHead from "@/components/champion/ChampionAbilityHead";
import VImage from "@/components/utility/VImage";
import VMediaObject from "@/components/utility/VMediaObject";

export default {
  name: "ChampionAbility",

  components: {
    ChampionAbilityBody,
    ChampionAbilityHead,
    VImage,
    VMediaObject
  },

  props: {
    champion: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      ability: this.champion.spell
    };
  }
};
</script>

<style scoped>
.champion-ability ::v-deep .media-left {
  margin-top: 0.1em;
}
</style>
