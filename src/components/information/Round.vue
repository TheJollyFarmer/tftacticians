<template>
  <div class="round">
    <RoundNumber :number="round.number"/>
    <RoundEventList :events="round.events"/>
    <RoundEventDescriptions :descriptions="round.descriptions"/>
  </div>
</template>

<script>
import RoundEventDescriptions from "@/components/information/RoundEventDescriptions";
import RoundEventList from "@/components/information/RoundEventList";
import RoundNumber from "@/components/information/RoundNumber";

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
  align-items: center;
  border-radius: 5px;
  box-shadow: $shadow;
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
  width: 100%;
}
</style>
