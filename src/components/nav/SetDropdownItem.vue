<template>
  <TransitionFade>
    <a
      :key="set.name"
      class="set"
      @click="clickEvent">
      <VImage
        :has-border="false"
        :is-round="false"
        :image="Math.floor(set.number)"
        dir="sets"
        dimension="42"/>
      <div class="set-labels">
        <span v-text="set.name"/>
        <span v-text="'set ' + set.number"/>
      </div>
    </a>
  </TransitionFade>
</template>

<script>
import VImage from "@/components/utility/VImage";
import TransitionFade from "@/components/transitions/TransitionFade";
export default {
  name: "SetDropdownItem",

  components: { TransitionFade, VImage },

  props: {
    set: {
      type: Object,
      required: true
    }
  },

  emits: ["onClick"],

  methods: {
    clickEvent() {
      this.$emit("onClick", this.set.number);
    }
  }
};
</script>

<style lang="scss" scoped>
.set {
  align-items: center;
  border-bottom: 1px solid var(--border);
  color: var(--colour);
  display: flex;
  padding: 0.4rem 0.8rem;
  text-transform: capitalize;
  transition: $hover-in;
  transition-property: background-color, color;
  white-space: nowrap;

  &:hover {
    background-color: var(--transparent);
    color: var(--colour);
    transition: background-color $hover-out;
  }

  &:last-child {
    border: none;
  }

  & :deep(.image) {
    margin-right: 1em;
  }

  & .set-labels {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    font-weight: $weight-bold;
    line-height: 1;
    margin-top: 0.2em;

    & span:last-child {
      font-weight: normal;
      font-size: 0.9rem;
      padding-top: 0.2em;
    }
  }
}
</style>
