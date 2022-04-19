<template>
  <VHeroSection
    title="The Reckoning"
    image="garen">
    <p>
      The Black Mist has poured across the Convergence, corrupting everything
      it touches - including items!
    </p>
    <p>
      <span> Shadow Items </span> are the new set mechanic for Reckoning.
      Corrupted by the magic of the Black Mist, they’re more powerful than
      their
      original counterparts - but with a twist - and often, a price.
    </p>
    <p>
      <span> Shadow Components </span> can appear in every carousel after the
      first one, as well as in the Armory - a pop-up shop where you choose
      from
      a selection of item components, similar to how you buy champions.
    </p>
    <p>
      <span> The Armory </span> will also play a major role in Hyper Roll, and
      is
      likely to stick around. From a mix of Armory and carousel options,
      players
      should expect to get two to four Shadow Components in any given game
      depending on their choices.
    </p>
  </VHeroSection>
</template>

<script>
import VHeroSection from "@/components/utility/VHeroSection";

export default {
  name: "Set5Mechanic",
  components: { VHeroSection }
};
</script>

<style lang="scss" scoped>
.layer {
  background-position: 180% 0;
  background-size: contain;
}
</style>
