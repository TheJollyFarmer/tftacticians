<template>
  <TransitionGrid>
    <Champion
      v-for="champion in champions"
      :id="champion.id"
      :key="champion.name"
      dimension="48"
      caption/>
  </TransitionGrid>
</template>

<script>
import Champion from "@/components/champions/Champion";
import TransitionGrid from "@/components/transitions/TransitionGrid";

export default {
  name: "ChampionGrid",

  components: { Champion, TransitionGrid },

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
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;

  .champion {
    flex: 10%;
    margin: 0 0 0.5em;
    max-width: 10%;

    .image {
      margin: auto;
    }
  }
}
</style>
