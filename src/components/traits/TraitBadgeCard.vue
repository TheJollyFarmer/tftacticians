<template>
  <Trait
    :name="name"
    :has-popovers="false"
    dimension="34"
    class="trait-badge-card"/>
</template>

<script>
import Trait from "@/components/traits/Trait";

export default {
  name: "TraitBadgeCard",

  components: { Trait },

  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.trait {
  font-size: 0.875em;

  ::v-deep .level {
    white-space: nowrap;

    .level-right {
      margin-left: 4em;
    }
  }
}
</style>
