<template>
  <div :class="['placement-tile', placementColour]">
    {{ placement }}
  </div>
</template>

<script>
import PlacementColour from "@/mixins/PlacementColour";

export default {
  name: "SummonerPlacementsTile",

  mixins: [PlacementColour],

  props: {
    placement: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.placement-tile {
  align-items: center;
  background-color: var(--primary);
  box-shadow: $shadow;
  border-radius: 3px;
  color: $white;
  display: flex;
  font-size: 0.9em;
  font-weight: bold;
  height: 2rem;
  justify-content: center;
  justify-self: center;
  width: 2rem;

  &.is-secondary {
    background-color: var(--secondary);
  }

  &.is-tertiary {
    background-color: var(--tertiary);
  }
}
</style>
