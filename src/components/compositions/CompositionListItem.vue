<template>
  <li
    :class="['layer', isActive]"
    @click="toggleExpand">
    <CompositionLink
      :composition="composition"
      :expanded="expand"/>
    <TransitionExpand v-if="isMobile">
      <Composition
        v-show="expand"
        :composition="composition"/>
    </TransitionExpand>
  </li>
</template>

<script>
import Composition from "@/components/compositions/sections/Composition";
import CompositionLink from "@/components/compositions/CompositionLink";
import TransitionExpand from "@/components/transitions/TransitionExpand";
import { mapGetters } from "vuex";

export default {
  name: "CompositionListItem",

  components: {
    CompositionLink,
    Composition,
    TransitionExpand
  },

  props: {
    composition: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      expand: false
    };
  },

  computed: {
    ...mapGetters({
      isMobile: "isMobile",
      active: "compositions/getActiveComposition"
    }),

    isActive() {
      return this.isSelected || this.isExpanded ? "is-active" : "";
    },

    isExpanded() {
      return this.isMobile && this.expand;
    },

    isSelected() {
      return this.active.name === this.composition.name && !this.isMobile;
    }
  },

  methods: {
    toggleExpand() {
      this.isMobile ? (this.expand = !this.expand) : "";
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $widescreen) {
  .layer {
    padding: 0;

    .composition {
      background-color: var(--layer);
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
