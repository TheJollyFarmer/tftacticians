<template>
  <VPage title="items">
    <template #aside>
      <ItemFilters/>
    </template>
    <ItemList :items="items()"/>
  </VPage>
</template>

<script>
import ItemFilters from "@/components/items/ItemFilters";
import ItemList from "@/components/items/ItemList";
import VPage from "@/components/utility/VPage";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ItemsView",

  components: {
    ItemFilters,
    ItemList,
    VPage
  },

  beforeRouteEnter: ({ params: { item }, query: { search } }, from, next) => {
    next(vm => vm.setFilters({ item, search }));
  },

  beforeRouteUpdate({ params: { item }, query: { search } }) {
    this.setFilters({ item, search });
  },

  computed: mapGetters("items", { items: "getItems" }),

  methods: mapActions("items", ["setFilters"])
};
</script>
