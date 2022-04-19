<template>
  <Trait
    :id="id"
    :popovers="false"
    class="trait-card"
    dimension="34"/>
</template>

<script>
import Trait from "@/components/traits/Trait";

export default {
  name: "TraitCard",

  components: { Trait },

  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.trait-card {
  background-color: var(--background);
  font-size: 0.875em;

  :deep(.media-left) {
    padding: $spacing-small;
    margin: 0 auto;
  }

  :deep(.media-content) {
    background-color: var(--surface);
    border-left: 1px solid var(--border);
    border-bottom-right-radius: $radius;
    border-top-right-radius: $radius;

    > .trait-head {
      padding: $spacing-small;
      margin: 0;
    }

    > .trait-body {
      background-color: var(--layer);
      border-top: 1px solid var(--border);
      padding: $spacing-small;
      border-bottom-right-radius: $radius;
    }
  }

  :deep(.level) {
    white-space: nowrap;

    .level-right {
      margin-left: 4em;
    }
  }
}
</style>
