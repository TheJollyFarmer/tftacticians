<template>
  <div :class="['placement-tile', colour]">
    {{ placement }}
  </div>
</template>

<script>
export default {
  name: "SummonerPlacementsTile",

  props: {
    placement: {
      type: Number,
      required: true
    }
  },

  computed: {
    colour() {
      return this.placement === 1
        ? ""
        : this.placement > 1 && this.placement <= 4
          ? "is-purple"
          : "is-turquoise";
    }
  }
};
</script>

<style lang="scss" scoped>
.placement-tile {
  align-items: center;
  background-color: $primary;
  box-shadow: $shadow;
  border: 2px solid $grey-dark;
  border-radius: 3px;
  color: $white;
  display: flex;
  font-size: 0.8em;
  font-weight: bold;
  height: 2rem;
  justify-content: center;
  width: 2rem;

  &.is-purple {
    background-color: $purple;
  }

  &.is-turquoise {
    background-color: $turquoise;
  }
}
</style>
