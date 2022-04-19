<template>
  <VField grouped>
    <VInput
      v-model="search"
      placeholder="Find an Item..."
      class="is-expanded"/>
    <VButton
      v-if="hasSpecialItems"
      :icon="icon"
      @onClick="toggleItems"/>
  </VField>
</template>

<script>
import Search from "@/mixins/Search";
import VButton from "@/components/utility/VButton";
import VField from "@/components/utility/VField";
import VInput from "@/components/utility/VInput";
import { mapActions, mapGetters, mapState } from "vuex";
import { hyphenise } from "@/utils/helpers";

export default {
  name: "ItemSearch",

  components: { VButton, VField, VInput },

  mixins: [Search],

  computed: {
    ...mapState({
      activeSet: state => state.activeSet,
      query: state => state.items.query,
      isSpecial: state => state.items.isSpecial,
      items: state => state.items
    }),

    ...mapGetters("items", ["getComponents", "getCombined", "getItem"]),

    icon() {
      return this.isSpecial ? "toggle-on" : "toggle-off";
    },

    hasSpecialItems() {
      return this.activeSet >= 5;
    }
  },

  methods: {
    ...mapActions("items", ["toggleSpecial"]),

    toggleItems() {
      this.toggleSpecial();

      let item = this.getItem(this.getComponents[0] || this.getCombined[0]);

      this.$router.push({ params: { item: hyphenise(item.name) } });
    }
  }
};
</script>
