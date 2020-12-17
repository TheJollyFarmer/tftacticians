<template>
  <div class="trait-badge-container">
    <div
      :class="['trait-badge', styleColour]"
      @mouseenter="displayPopover"
      @mouseleave="hidePopover">
      <VImage
        :image="name"
        :has-border="false"
        :dimension="dimension"
        dir="traits"/>
      <TraitBadgeCount
        v-if="count"
        :count="count"
        :class="styleColour"/>
    </div>
  </div>
</template>

<script>
import TraitBadgeCount from "@/components/traits/TraitBadgeCount";
import Popover from "@/mixins/Popover";
import VImage from "@/components/utility/VImage";
import { mapGetters } from "vuex";

export default {
  name: "TraitBadge",

  components: { TraitBadgeCount, VImage },

  mixins: [Popover],

  props: {
    name: {
      type: String,
      required: true
    },

    count: {
      type: Number,
      required: false,
      default: 2
    },

    dimension: {
      type: String,
      required: false,
      default: "18"
    }
  },

  computed: {
    ...mapGetters("champions/traits", ["getCountStyle"]),

    styleColour() {
      return this.getCountStyle({
        trait: this.name,
        count: this.count
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.trait-badge-container {
  cursor: pointer;

  .trait-badge {
    border-left: 2px solid black;
    display: flex;
    height: 1.155em;
    justify-content: center;
    margin: 0.6em 1em;
    position: relative;
    width: 2em;

    .image {
      z-index: 2;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      width: 1.4144em;
      height: 1.4144em;
      transform: scaleY(0.5774) rotate(-45deg);
      background-color: inherit;
      left: 0.1679em;
    }

    &::before {
      top: -0.7071em;
      border-top: 2.8284px solid black;
      border-right: 2.8284px solid black;
    }

    &::after {
      bottom: -0.7071em;
      border-bottom: 2.8284px solid black;
      border-left: 2.8284px solid black;
    }
  }
}
</style>
