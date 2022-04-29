<template>
  <div class="layer no-history-body">
    <VFavicon icon="khanda"/>
    <h3>Your account has no match history.</h3>
    <p>
      If this is your account: play some matches, and when you return, your
      match history will be here.
    </p>
  </div>
  <VButton
    icon="undo"
    type="is-fullwidth"
    @click="getSummonerData"/>
</template>

<script>
import VButton from "@/components/utility/VButton";
import VFavicon from "@/components/utility/VFavicon";
import { mapActions } from "vuex";

export default {
  name: "NoHistoryBody",

  components: { VButton, VFavicon },

  methods: mapActions("summoner", ["getSummonerData"])
};
</script>

<style lang="scss" scoped>
.no-history-body {
  display: flex;
  flex-direction: column;
  text-align: center;

  .icon {
    font-size: 2em;
    margin: auto;
  }

  h3 {
    margin: $spacing-large 0 $spacing-small;
  }

  p {
    font-size: 0.9em;
  }
}
</style>
