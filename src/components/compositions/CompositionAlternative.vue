<template>
  <div class="composition-alternative">
    <ChampionList :champions="alternative.names"/>
    <VFavicon icon="arrow-right"/>
    <ChampionList :champions="alternative.replacements"/>
  </div>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "CompositionAlternative",

  components: { ChampionList, VFavicon },

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
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5em;
  > .level {
    margin-bottom: 0;
  }
}
</style>
