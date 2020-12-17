<template>
  <div>
    <p v-text="ability.description"/>
    <ChampionAbilityValues
      v-for="(data, index) in ability.values"
      :key="index"
      :data="data"/>
  </div>
</template>

<script>
import ChampionAbilityValues from "@/components/champion/ChampionAbilityValues";

export default {
  name: "ChampionAbilityBody",

  components: { ChampionAbilityValues },

  props: {
    ability: {
      type: Object,
      required: true
    }
  }
};
</script>
