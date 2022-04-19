<template>
  <div class="round-number">
    <span> Round </span>
    <strong>
      {{ number }}
    </strong>
  </div>
</template>

<script>
export default {
  name: "RoundNumber",

  props: {
    number: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.round-number {
  align-items: center;
  background: var(--primary);
  //border: 2px solid $grey-dark;
  border-radius: 5px;
  box-shadow: $shadow;
  color: $white;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  font-weight: bold;
  //margin: 0.5em;
  padding: 0.5em 0.7em;

  strong {
    color: white;
    font-size: 1.2em;
  }
}
</style>
