<template>
  <div class="trait-bonus">
    <span :class="classes">
      {{ bonus.min }}
    </span>
    {{ bonus.description }}
  </div>
</template>

<script>
export default {
  name: "ChampionTraitBonus",

  props: {
    bonus: {
      type: Object,
      required: true
    }
  },

  computed: {
    classes() {
      return ["trait-bonus-count", "is-" + this.bonus.style];
    }
  }
};
</script>

<style lang="scss" scoped>
.trait-bonus {
  align-items: center;
  display: flex;
  white-space: pre-line;

  .trait-bonus-count {
    align-items: center;
    border: 2px solid $black;
    border-radius: 50%;
    box-shadow: $shadow;
    color: white;
    cursor: default;
    display: flex;
    flex-shrink: 0;
    height: 30px;
    line-height: 1;
    margin-right: 0.7rem;
    justify-content: center;
    width: 30px;
  }

  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
}
</style>
