<template>
  <VHeroSection
    title="Divine Blessing"
    image="teemo-devil">
    <p>Brought into existence by the forces of Order, the Divine Blessing is a loot orb that grants the same essential contents for all players but only once they drop below 40 health. At the Dawn of Heroes, look to the Divine Blessing to fight back the brutality of a pending eighth. Blessings grant a high amount of immediate value, offering a combination of the following:</p>
    <ul class="blessings">
      <li
        v-for="item in list"
        :key="item">
        <VFavicon icon="circle"/>
        <span v-text="item"/>
      </li>
    </ul>
  </VHeroSection>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";
import VHeroSection from "@/components/utility/VHeroSection";

export default {
  name: "Set55Blessing",

  components: { VFavicon, VHeroSection },

  computed: {
    list() {
      return [
        "Items (Components)",
        "Gold (Moves everything around me)",
        "Consumables",
        "Spatula",
        "Champions"
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.blessings li {
  align-items: center;
  display: flex;

  & span:first-of-type {
    font-size: 0.5em;
    margin-right: 0.5em;
  }

  & span:last-of-type {
    color: var(--colour);
  }
}
</style>
