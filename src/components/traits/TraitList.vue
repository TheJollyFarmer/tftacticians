<template>
  <VList
    v-slot="{ item }"
    :collection="traits">
    <Trait
      :id="item.key || item"
      :key="item.key || item"/>
  </VList>
</template>

<script>
import Trait from "@/components/traits/Trait";
import VList from "@/components/utility/VList";

export default {
  name: "TraitList",

  components: { Trait, VList },

  props: {
    traits: {
      type: Array,
      required: true
    }
  }
};
</script>
