<template>
  <VFilters>
    <VInput
      v-model="search"
      type="search"
      :placeholder="placeholder"
      class="is-expanded"/>
    <VButtons
      :buttons="types"
      :active="filter"
      class="mt-4"
      @onClick="setType"/>
  </VFilters>
</template>

<script>
import Search from "@/mixins/Search";
import VButtons from "@/components/utility/VButtons";
import VFilters from "@/components/utility/VFilters";
import VInput from "@/components/utility/VInput";
import { mapActions, mapState } from "vuex";

export default {
  name: "TraitFilters",

  components: {
    VButtons,
    VFilters,
    VInput
  },

  mixins: [Search],

  computed: {
    ...mapState("champions/traits", ["query", "filter", "types"]),

    placeholder() {
      let type = this.filter === "classes" ? "a Class" : "an Origin";

      return `Find ${type}...`;
    }
  },

  methods: {
    ...mapActions("champions/traits", ["setQuery"]),

    setType(type) {
      this.$router.push(type);
    }
  }
};
</script>
