<template>
  <VMediaObject
    :is-v-centered="false"
    has-wrap
    class="champion-ability">
    <template #mediaLeft>
      <VImage
        :image="champion.name"
        :dir="directory"
        dimension="44"/>
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
import { mapGetters } from "vuex";

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
  },

  computed: {
    ...mapGetters({ set: "getActiveSet" }),

    directory() {
      return `champions/${this.set}/spells`;
    }
  }
};
</script>

<style scoped>
.champion-ability ::v-deep .media-left {
  margin-top: 0.1em;
}
</style>
