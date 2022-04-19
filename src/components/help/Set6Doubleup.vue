<template>
  <VHeroSection
    title="Double Up"
    image="double">
    <p>Double Up is Teamfight Tactics’ new 2v2v2v2 lab</p>
    <p>
      You can queue up solo or with a preferred partner that you’ll share health
      with. Once your health pool runs out for the first time, it’s set back to 
      1. Any loss thereafter eliminates the both of you. With the Assist Armory,
      you can gift your partner item components, gold, and other boosts at key 
      points in the game. Use the Rune of Allegiance to gift champions and items
      they may be holding to your partner. Everyone gets one at the start of the
      game, but you can get another via the Assist Armory. If you beat your 
      opponent’s army before your partner beats theirs, after a short delay your
      surviving champions will hop onto your partner’s board to help them out!
    </p>
  </VHeroSection>
</template>

<script>
import VHeroSection from "@/components/utility/VHeroSection";

export default {
  name: "Set6Doubleup",
  components: { VHeroSection }
};
</script>
