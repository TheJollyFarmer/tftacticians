<template>
  <VPage title="traits">
    <template #aside>
      <TraitFilters/>
    </template>
    <TraitList :traits="traits"/>
  </VPage>
</template>

<script>
import TraitFilters from "@/components/traits/TraitFilters";
import TraitList from "@/components/traits/TraitList";
import VPage from "@/components/utility/VPage";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TraitsView",

  components: {
    TraitFilters,
    TraitList,
    VPage
  },

  beforeRouteEnter: ({ params: { type }, query: { search } }, from, next) => {
    next(vm => vm.setFilters({ type, search }));
  },

  beforeRouteUpdate({ params: { type }, query: { search } }) {
    this.setFilters({ type, search });
  },

  computed: mapGetters("champions/traits", {
    traits: "getFilteredTraits"
  }),

  methods: mapActions("champions/traits", ["setFilters"])
};
</script>
