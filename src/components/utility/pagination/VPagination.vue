<template>
  <nav
    v-if="total > 1"
    class="pagination is-centered">
    <VPaginatorNav
      v-if="total > 3"
      :page="page"/>
    <VPaginationList
      :pages="pages"
      :active="page"/>
    <VPaginatorNav
      v-if="total > 3"
      :page="page"
      type="next"/>
  </nav>
</template>

<script>
import VPaginatorNav from "./VPaginationNav";
import VPaginationList from "@/components/utility/pagination/VPaginationList";

export default {
  name: "VPagination",

  components: {
    VPaginationList,
    VPaginatorNav
  },

  props: {
    page: {
      type: Number,
      default: 1
    },

    total: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      maxVisibleButtons: 3
    };
  },

  computed: {
    startPage() {
      if (this.page <= 4) return 2;

      if (this.page >= this.total - 1) {
        return this.total - this.maxVisibleButtons;
      }

      return this.page - 1;
    },

    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.total - 1
      );
    },

    pageRange() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push(i);
      }

      return range;
    },

    pages() {
      return [1, ...this.pageRange, this.total];
    }
  }
};
</script>
