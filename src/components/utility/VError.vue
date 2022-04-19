<template>
  <div class="error">
    <VFavicon
      icon="sad-cry"
      size="large"/>
    Sorry, there are no search results.
  </div>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VError",

  components: { VFavicon }
};
</script>

<style lang="scss" scoped>
.error {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: none;
  justify-items: center;

  .icon {
    color: var(--primary);
    font-size: 3em;
    margin-bottom: $spacing-smallest;
  }
}
</style>
