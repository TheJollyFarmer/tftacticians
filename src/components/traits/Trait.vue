<template>
  <VMediaObject
    :is-v-centered="false"
    has-wrap
    class="trait">
    <template #mediaLeft>
      <VImage
        :image="trait.name"
        :dimension="dimension"
        :has-border="false"
        :dir="'traits/' + set"/>
    </template>
    <TraitHead
      :trait="trait"
      :dimension="dimension"
      :has-popovers="hasPopovers"/>
    <TraitBody :trait="trait"/>
  </VMediaObject>
</template>

<script>
import TraitBody from "@/components/traits/TraitBody";
import TraitHead from "@/components/traits/TraitHead";
import VMediaObject from "@/components/utility/VMediaObject";
import VImage from "@/components/utility/VImage";
import { mapGetters } from "vuex";

export default {
  name: "Trait",

  components: {
    TraitBody,
    TraitHead,
    VImage,
    VMediaObject
  },

  props: {
    name: {
      type: String,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    hasPopovers: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    ...mapGetters({
      getTrait: "champions/traits/getTrait",
      set: "getActiveSet"
    }),

    trait() {
      return this.getTrait(this.name);
    }
  }
};
</script>

<style scoped>
.trait ::v-deep .media-left {
  margin-top: 0.2em;
}
</style>
