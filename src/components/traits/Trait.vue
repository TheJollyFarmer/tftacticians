<template>
  <VMediaObject
    :id="trait.name"
    :is-v-centered="false"
    has-wrap
    class="layer is-align-items-start">
    <template #mediaLeft>
      <TraitImage
        class="mt-1"
        :trait="trait.name"
        :dimension="dimension"/>
    </template>
    <TraitHead
      :trait="trait"
      :dimension="dimension"
      :popovers="popovers"/>
    <TraitBody :trait="trait"/>
  </VMediaObject>
</template>

<script>
import Trait from "@/mixins/Trait";
import TraitBody from "@/components/traits/TraitBody";
import TraitHead from "@/components/traits/TraitHead";
import TraitImage from "@/components/traits/TraitImage";
import VMediaObject from "@/components/utility/VMediaObject";

export default {
  name: "Trait",

  components: {
    TraitBody,
    TraitHead,
    TraitImage,
    VMediaObject
  },

  mixins: [Trait],

  props: {
    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    popovers: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>
