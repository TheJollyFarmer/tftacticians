<template>
  <article>
    <VHeader
      v-if="header"
      :text="header"/>
    <VTable
      aligned
      :fullwidth="fullwidth">
      <VTHead
        v-if="headers.length"
        :headers="headers"/>
      <VTBody :data="rows"/>
    </VTable>
  </article>
</template>

<script>
import VHeader from "@/components/utility/VHeader";
import VTable from "@/components/utility/VTable";
import VTBody from "@/components/utility/VTBody";
import VTHead from "@/components/utility/VThead";

export default {
  name: "DamagePartialTable",

  components: {
    VHeader,
    VTable,
    VTBody,
    VTHead
  },

  props: {
    header: {
      type: String,
      required: false,
      default: ""
    },

    headers: {
      type: Array,
      required: false,
      default: () => []
    },

    rows: {
      type: Array,
      required: true
    },

    fullwidth: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  margin-bottom: 1.5rem;

  &:first-of-type ::v-deep th:first-of-type {
    empty-cells: hide;
  }

  ::v-deep td:first-of-type {
    background-color: $primary;
    border-right: 1px solid $grey-lighter;
    color: $white;
    font-weight: bold;
    text-align: start;
  }
}
</style>
