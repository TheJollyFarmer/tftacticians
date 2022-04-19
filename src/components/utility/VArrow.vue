<template>
  <VFavicon
    :icon="icon"
    class="arrow"/>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VArrow",

  components: { VFavicon },

  props: {
    type: {
      type: String,
      required: false,
      default: "right"
    }
  },

  computed: {
    icon() {
      return "arrow-" + this.type;
    }
  }
};
</script>

<style scoped>
.arrow {
  flex-shrink: 0;
  margin: 0 0.5em;
}
</style>
