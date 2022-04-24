<template>
  <VField grouped>
    <VInput
      v-model="search"
      placeholder="Find a Champion..."
      class="is-expanded"/>
    <VButton
      icon="undo"
      @onClick="clickEvent"/>
  </VField>
</template>

<script>
import Search from "@/mixins/Search";
import VButton from "@/components/utility/VButton";
import VField from "@/components/utility/VField";
import VInput from "@/components/utility/VInput";
import { mapState } from "vuex";

export default {
  name: "ChampionSearch",

  components: { VButton, VField, VInput },

  mixins: [Search],

  emits: ["onClick"],

  computed: mapState("champions", ["query"]),

  methods: {
    clickEvent() {
      this.$emit("onClick");
    }
  }
};
</script>
