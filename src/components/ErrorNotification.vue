<template>
  <VNotification
    :text="error"
    :class="isActive"
    title="Oops, something went wrong.">
    <template #noteRight>
      <VButton
        icon="undo"
        class="is-outlined is-inverted"
        @click="getSummonerProfile"/>
    </template>
  </VNotification>
</template>

<script>
import Click from "@/mixins/Click";
import Timer from "@/mixins/Timer";
import VButton from "@/components/utility/VButton";
import VNotification from "@/components/utility/VNotification";
import { mapActions, mapState } from "vuex";

export default {
  name: "ErrorNotification",

  components: { VButton, VNotification },

  mixins: [Click, Timer],

  emits: ["close"],

  computed: {
    ...mapState(["error"]),

    isActive() {
      return this.error ? "is-active" : "";
    }
  },

  methods: mapActions("summoner", ["getSummonerProfile"])
};
</script>

<style lang="scss" scoped>
.note {
  border: 1px solid var(--border);
  bottom: 2em;
  grid-template-columns: 0.2fr 3fr 0.2fr;
  left: 50%;
  opacity: 0;
  position: fixed;
  transform: translate(-50%, 200%);
  transition: $hover-in;
  width: 505px;

  &.is-active {
    opacity: 1;
    transform: translate(-50%, 0);
    transition: $hover-out;
  }

  .button {
    box-shadow: none;
    color: var(--colour) !important;
    transform: scaleX(-1);

    &:hover,
    &:focus,
    &:visited {
      background: transparent !important;
      border: none;
      box-shadow: none;
    }
  }
}
</style>
