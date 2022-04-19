<template>
  <div class="round layer">
    <RoundNumber :number="round.number"/>
    <RoundEventList :events="round.events"/>
    <RoundEventDescriptions :descriptions="round.descriptions"/>
  </div>
</template>

<script>
import RoundEventDescriptions from "@/components/help/RoundEventDescriptions";
import RoundEventList from "@/components/help/RoundEventList";
import RoundNumber from "@/components/help/RoundNumber";

export default {
  name: "Round",

  components: {
    RoundEventDescriptions,
    RoundEventList,
    RoundNumber
  },

  props: {
    round: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.round {
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
}
</style>
