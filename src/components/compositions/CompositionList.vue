<template>
  <VList
    v-slot="{ item: composition }"
    :collection="compositions"
    tag="ul">
    <CompositionListItem
      :key="composition"
      :composition="composition"/>
  </VList>
</template>

<script>
import CompositionListItem from "@/components/compositions/CompositionListItem";
import VList from "@/components/utility/VList";

export default {
  name: "CompositionsList",

  components: {
    CompositionListItem,
    VList
  },

  props: {
    compositions: {
      type: Array,
      required: true
    }
  }
};
</script>
