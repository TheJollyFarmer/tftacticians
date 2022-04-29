<template>
  <section>
    <VButtons
      :buttons="['all', '1', '2', '3']"
      :active="tier"
      @onClick="setTier"/>
    <TransitionList>
      <Augment
        v-for="augment in filteredAugments"
        :key="augment.name"
        :augment="augment"/>
    </TransitionList>
  </section>
</template>

<script>
import Augment from "@/views/help/Augment";
import augments from "../../../public/assets/data/augments.json";
import VButtons from "@/components/utility/VButtons";
import TransitionList from "@/components/transitions/TransitionList";

export default {
  name: "AugmentsView",

  components: {
    Augment,
    TransitionList,
    VButtons
  },

  data() {
    return {
      augments,
      tier: "all"
    };
  },

  computed: {
    filteredAugments() {
      return this.tier === "all"
        ? this.augments
        : this.augments.filter(augment => augment.tier === this.tier);
    }
  },

  methods: {
    setTier(tier) {
      this.tier = tier;
    }
  }
};
</script>

<style scoped lang="scss">
.buttons {
  margin: 0 auto $spacing-large;
  width: 50%;
}

.layer {
  font-size: 0.9em;
}
</style>
