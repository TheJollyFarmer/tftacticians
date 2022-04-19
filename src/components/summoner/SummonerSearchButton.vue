<template>
  <VButton
    :class="isWide"
    icon="globe"
    @onClick="clickEvent">
    <span>
      {{ region }}
    </span>
  </VButton>
</template>

<script>
import VButton from "@/components/utility/VButton";

export default {
  name: "SummonerSearchButton",

  components: { VButton },

  props: {
    region: {
      type: String,
      required: true
    }
  },

  emits: ["onClick"],

  computed: {
    isWide() {
      return this.region === "eune" ? "is-wide" : "";
    }
  },

  methods: {
    clickEvent() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  font-size: 0.75em;
  height: 2em;
  padding: 0.5em;
  position: absolute;
  right: 0.83em;
  text-transform: uppercase;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  & :deep(.icon) {
    margin-left: 0 !important;
    position: relative;
    width: auto;
  }

  & .is-wide :deep(::-webkit-search-cancel-button) {
    right: 4.6em;
  }

  &:deep(::-webkit-search-cancel-button) {
    right: 4.3em;
  }
}
</style>
