<template>
  <div class="league-image">
    <VImage
      :has-border="false"
      :is-round="false"
      :image="league"
      :dimension="dimension"
      dir="ranked"/>
    <span
      v-if="caption"
      class="caption"
      v-text="league"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "LeagueImage",

  components: { VImage },

  props: {
    league: {
      type: String,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "24"
    },

    caption: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.region {
  margin: 0;

  a {
    align-items: center;
    color: var(--colour);
    display: flex;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;

    &:hover,
    &.is-active {
      .image {
        border-color: var(--primary);
      }

      span {
        color: var(--primary);
        transition: color $hover-out;
      }
    }

    span {
      transition: color $hover-in;
    }
  }
}

.league-image {
  align-items: center;
  display: flex;
  text-transform: capitalize;

  .image {
    height: auto;
  }
}
</style>
