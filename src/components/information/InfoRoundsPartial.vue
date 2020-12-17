<template>
  <div>
    <Round
      v-for="(round, index) in rounds"
      :key="index"
      :round="round"/>
  </div>
</template>

<script>
import rounds from "@/constants/rounds";
import Round from "@/components/information/Round";

export default {
  name: "InfoRoundsPartial",

  components: { Round },

  data() {
    return {
      rounds
    };
  }
};
</script>
