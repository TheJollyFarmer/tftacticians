<template>
  <li>
    <span class="pagination-ellipsis">
      <VFavicon :icon="icon"/>
    </span>
  </li>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VPaginationSeparator",

  components: { VFavicon },

  props: {
    icon: {
      type: String,
      required: false,
      default: "ellipsis-h"
    }
  }
};
</script>
