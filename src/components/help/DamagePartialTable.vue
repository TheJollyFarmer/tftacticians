<template>
  <article>
    <VHeader
      v-if="header"
      :text="header"/>
    <VTable
      aligned
      centered
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
    },

    centered: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  margin-bottom: 1.5rem;

  &:first-of-type :deep(th:first-of-type) {
    empty-cells: hide;
  }

  :deep(td:first-of-type) {
    background-color: var(--primary);
    color: $white-dark;
    font-weight: bold;
    text-align: start;
  }
}
</style>
