<template>
  <div class="content">
    <div
      class="has-text-weight-bold"
      v-text="ability.name"/>
    <div v-text="ability.type"/>
  </div>
</template>

<script>
export default {
  name: "ChampionAbilityHead",

  props: {
    ability: {
      type: Object,
      required: true
    }
  }
};
</script>
