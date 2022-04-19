<template>
  <div class="composition-alternative">
    <ChampionList :champions="alternative.names"/>
    <VArrow/>
    <ChampionList :champions="alternative.replacements"/>
  </div>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import VArrow from "@/components/utility/VArrow";

export default {
  name: "CompositionAlternative",

  components: { ChampionList, VArrow },

  props: {
    alternative: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.composition-alternative {
  align-items: center;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  margin-top: 0.5em;

  .image-list:first-child {
    justify-self: end;
  }
}
</style>
