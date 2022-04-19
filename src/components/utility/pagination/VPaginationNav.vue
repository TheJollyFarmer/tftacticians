<template>
  <TransitionFade>
    <VRouterLink
      :to="{ query: { page: newPage } }"
      :disabled="disabled"
      :class="'pagination-' + type"
      :aria="type"
      :rel="type">
      <VFavicon :icon="'chevron-' + iconType"/>
    </VRouterLink>
  </TransitionFade>
</template>

<script>
import TransitionFade from "../../transitions/TransitionFade";
import VFavicon from "../VFavicon";
import VRouterLink from "@/components/utility/VRouterLink";

export default {
  name: "VPaginationNav",

  components: { VRouterLink, TransitionFade, VFavicon },

  props: {
    type: {
      type: String,
      required: false,
      default: "previous"
    },

    page: {
      type: Number,
      required: true
    }
  },

  computed: {
    iconType() {
      return this.type === "previous" ? "left" : "right";
    },

    disabled() {
      let page = this.type === "previous" ? 1 : this.$parent.total;

      return this.page === page;
    },

    newPage() {
      return this.type === "previous" ? this.page - 1 : this.page + 1;
    }
  }
};
</script>

<style scoped>
.pagination-previous,
.pagination-next {
  padding: 0;
}
</style>
