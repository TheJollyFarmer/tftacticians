<template>
  <div>
    <ChampionCardMedia :champion="champion"/>
    <ItemImageList
      :items="champion.items"
      :has-popovers="false"
      dimension="32"/>
  </div>
</template>

<script>
import ChampionCardMedia from "@/components/champions/card/ChampionCardMedia";
import ItemImageList from "@/components/items/ItemImageList";
import { mapGetters } from "vuex";

export default {
  name: "ChampionCard",

  components: {
    ChampionCardMedia,
    ItemImageList
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters("champions", ["getChampion"]),

    champion() {
      return this.getChampion(this.name);
    }
  }
};
</script>

<style scoped>
.image-list {
  padding-top: 0.7rem;
  justify-content: space-between;
  width: 100%;
}
</style>
