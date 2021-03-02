<template>
  <VSection title="tier">
    <article class="tier">
      <div class="tier-region">
        {{ region.toUpperCase() }}
      </div>
      <span>
        {{ ranked.tier }} {{ ranked.rank }}
      </span>
      <VDash/>
      <span class="tier-lp">
        {{ ranked.leaguePoints }} LP
      </span>
    </article>
  </VSection>
</template>

<script>
import VDash from "@/components/utility/VDash";
import VSection from "@/components/utility/VSection";

export default {
  name: "SummonerTierSection",

  components: { VDash, VSection },

  props: {
    ranked: {
      type: Object,
      required: true
    },

    region: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.tier {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  font-weight: bold;
  line-height: 1;

  .tier-region {
    align-items: center;
    background-color: $primary;
    border-radius: 3px;
    box-shadow: $shadow;
    color: $white;
    display: flex;
    justify-content: center;
    margin-right: 1em;
    padding: 0.5em 0.6em;
  }

  .tier-lp {
    margin-left: auto;
  }
}
</style>
