<template>
  <div class="column is-three-fifths-desktop">
    <VHeader text="compositions"/>
    <CompositionListItem
      v-for="(composition, index) in compositions"
      :key="index"
      :composition="composition"
      @onClick="setComposition"/>
  </div>
</template>

<script>
import CompositionListItem from "@/components/compositions/CompositionListItem";
import VHeader from "@/components/utility/VHeader";
import { mapActions } from "vuex";

export default {
  name: "CompositionsList",

  components: { CompositionListItem, VHeader },

  props: {
    compositions: {
      type: Array,
      required: true
    }
  },

  methods: mapActions("compositions", ["setComposition"])
};
</script>
