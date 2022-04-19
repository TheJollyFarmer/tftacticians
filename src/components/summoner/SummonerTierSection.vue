<template>
  <VSection title="tier">
    <article class="tier">
      <LeagueImage
        :league="rank"
        dimension="48"/>
      <div class="tier-body">
        <div class="tier-info">
          <span v-text="rank"/>
          <VDash/>
          <span v-text="lp"/>
        </div>
        <div
          class="tier-region"
          v-text="region"/>
      </div>
    </article>
  </VSection>
</template>

<script>
import VDash from "@/components/utility/VDash";
import VSection from "@/components/utility/VSection";
import LeagueImage from "@/components/leaderboard/LeagueImage";

export default {
  name: "SummonerTierSection",

  components: { LeagueImage, VDash, VSection },

  props: {
    ranked: {
      type: Object,
      required: true
    },

    region: {
      type: String,
      required: true
    }
  },

  computed: {
    rank() {
      return this.ranked.tier.toLowerCase();
    },

    lp() {
      return this.ranked.leaguePoints + " LP";
    }
  }
};
</script>

<style lang="scss" scoped>
.tier {
  align-items: center;
  display: flex;
  font-weight: bold;
  line-height: 1;
  margin-top: -0.2em;
  text-transform: capitalize;

  .tier-body {
    flex-grow: 2;
    margin-left: $spacing;
  }

  .tier-info {
    align-items: center;
    display: flex;
    margin: $spacing-small 0;
  }

  .tier-region {
    align-items: center;
    background-color: var(--primary);
    border-radius: 3px;
    box-shadow: $shadow;
    color: $white;
    display: flex;
    font-size: 0.9em;
    justify-content: center;
    padding: 0.25em $spacing-small 0.2em;
    text-transform: uppercase;
    width: 50px;
  }
}
</style>
