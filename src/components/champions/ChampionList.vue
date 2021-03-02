<template>
  <div class="image-list">
    <!--Champion is an object in one instance rather than a string.-->
    <Champion
      v-for="(champion, index) in champions"
      :id="champion.id || champion"
      :key="index"
      :starred="champion.starred"
      :items="champion.items"
      :dimension="dimension"
      :has-popover="hasPopovers"/>
  </div>
</template>

<script>
import Champion from "@/components/champions/Champion";

export default {
  name: "ChampionList",

  components: { Champion },

  props: {
    champions: {
      type: [Array, Object],
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    hasPopovers: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>
