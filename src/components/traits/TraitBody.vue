<template>
  <div>
    <p v-if="trait.innate">
      <span class="has-text-weight-bold">
        Innate:
      </span>
      {{ trait.innate }}
    </p>
    <p v-if="trait.description">
      {{ trait.description }}
    </p>
    <template v-if="isValid">
      <TraitBonus
        v-for="(set, index) in trait.sets"
        :key="index"
        :bonus="set"/>
    </template>
  </div>
</template>

<script>
import TraitBonus from "@/components/traits/TraitBonus";

export default {
  name: "TraitBody",

  components: { TraitBonus },

  props: {
    trait: {
      type: Object,
      required: true
    }
  },

  computed: {
    isValid() {
      return !this.trait.innate || this.trait.description;
    }
  }
};
</script>
