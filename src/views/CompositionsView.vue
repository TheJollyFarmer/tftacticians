<template>
  <v-page is-full-width>
    <CompositionsList :compositions="compositions"/>
    <Composition :composition="composition"/>
  </v-page>
</template>

<script>
import Composition from "@/components/compositions/Composition";
import CompositionsList from "@/components/compositions/CompositionList";
import VPage from "@/components/utility/VPage";
import { mapGetters } from "vuex";

export default {
  name: "CompositionsView",

  components: { Composition, CompositionsList, VPage },

  computed: mapGetters("compositions", {
    compositions: "getCompositions",
    composition: "getActiveComposition"
  })
};
</script>
