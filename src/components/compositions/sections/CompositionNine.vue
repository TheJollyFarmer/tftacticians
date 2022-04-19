<template>
  <div
    v-if="champion"
    class="composition-nine">
    <div v-text="'lvl 9'"/>
    <VArrow/>
    <ChampionLink :id="champion"/>
  </div>
</template>

<script>
import ChampionLink from "@/components/champions/ChampionLink";
import VArrow from "@/components/utility/VArrow";

export default {
  name: "CompositionNine",

  components: { ChampionLink, VArrow },

  props: {
    champion: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.composition-nine {
  align-items: center;
  display: flex;

  & div {
    align-items: center;
    background-color: var(--layer);
    border-radius: $radius;
    box-shadow: $shadow;
    display: flex;
    font-size: 0.7em;
    font-weight: bold;
    height: 27px;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
    width: 40px;

    @media only screen and (max-width: $widescreen) {
      background-color: var(--surface);
    }
  }
}
</style>
