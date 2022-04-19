<template>
  <TransitionFade>
    <li>
      <RouterLink
        :to="{ query: { page } }"
        :aria-label="'Goto page ' + page"
        :class="['pagination-link', isActive]">
        {{ page }}
      </RouterLink>
    </li>
  </TransitionFade>
</template>

<script>
import TransitionFade from "../../transitions/TransitionFade";

export default {
  name: "VPaginationItem",

  components: { TransitionFade },

  props: {
    page: {
      type: Number,
      required: true
    },

    active: {
      type: Number,
      required: true
    }
  },

  computed: {
    isActive() {
      return this.active === this.page ? "is-current" : "";
    }
  }
};
</script>
