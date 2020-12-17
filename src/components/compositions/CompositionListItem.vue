<template>
  <div
    class="composition"
    @click="clickEvent">
    <VLevel>
      <CompositionListItemInfo :composition="composition"/>
      <template #levelRight>
        <ChampionList :champions="composition.champions"/>
      </template>
    </VLevel>
  </div>
</template>

<script>
import ChampionList from "@/components/champions/ChampionList";
import CompositionListItemInfo from "@/components/compositions/CompositionListItemInfo";
import VLevel from "@/components/utility/VLevel";
import { mapGetters } from "vuex";

export default {
  name: "CompositionListItem",

  components: {
    ChampionList,
    CompositionListItemInfo,
    VLevel
  },

  props: {
    composition: {
      type: Object,
      required: true
    }
  },

  computed: mapGetters("champions", ["getChampion"]),

  methods: {
    clickEvent() {
      this.$emit("onClick", this.composition.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.composition {
  padding: 0.5em;

  ::v-deep .item {
    margin: 0;
  }

  &:hover {
    background: $white-ter;
  }
}
</style>
