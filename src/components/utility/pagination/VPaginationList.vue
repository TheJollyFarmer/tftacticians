<template>
  <ul class="pagination-list">
    <template
      v-for="(page, index) in pages"
      :key="index">
      <VPaginationItem
        :page="page"
        :active="active"/>
      <VPaginationSeparator v-if="isValid(index)"/>
    </template>
  </ul>
</template>

<script>
import VPaginationItem from "./VPaginationItem";
import VPaginationSeparator from "./VPaginationSeparator";

export default {
  name: "VPaginationList",

  components: {
    VPaginationItem,
    VPaginationSeparator
  },

  props: {
    pages: {
      type: Array,
      required: true
    },

    active: {
      type: Number,
      required: true
    }
  },

  methods: {
    isValid(index) {
      return (
        this.pages.length > 3 &&
        (index === 0 || index === this.pages.length - 2)
      );
    }
  }
};
</script>
