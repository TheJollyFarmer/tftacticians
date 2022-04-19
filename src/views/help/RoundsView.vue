<template>
  <article>
    <Round
      v-for="(round, index) in rounds"
      :key="index"
      :round="round"/>
  </article>
</template>

<script>
import rounds from "@/constants/rounds.json";
import Round from "@/components/help/Round";

export default {
  name: "RoundsView",

  components: { Round },

  data() {
    return {
      rounds
    };
  }
};
</script>
