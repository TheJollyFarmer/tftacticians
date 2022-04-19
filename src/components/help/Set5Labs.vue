<template>
  <VHeroSection
    title="Labs and Hyper Roll"
    image="darius">
    <p>
      Labs will offer new and experimental ways to play TFT. The goal of Labs
      is to try out different ideas and playstyles to understand what players
      enjoy. Labs will be available in TFT for a limited time, and then may
      leave to make room for new ones, or if they’re wildly popular, may stick
      around.
    </p>
    <p>
      The first of these new Labs will be <span> Hyper Roll </span>. Hyper
      Roll aims to get players in and out of a game in around 15 minutes or
      so. Players start with 20 health, and lose 2 for every round lost, and
      later jumps up to 4 then 6 HP. There's also no gold interest, so players
      are free to roll continuously. Neutral minion rounds, item drops,
      leveling and the carousel rules have also changed.
    </p>
    <p>
      Hyper Roll and other Labs in the future will use a separate and slightly
      different system than core ranked gameplay. Players will still be able
      to climb and show off that they are the best Hyper Roll player out
      there, but we want to reserve our existing ranks like Challenger and
      Grandmaster for the core TFT experience.
    </p>
  </VHeroSection>
</template>

<script>
import VHeroSection from "@/components/utility/VHeroSection";

export default {
  name: "Set5Labs",
  components: { VHeroSection }
};
</script>
