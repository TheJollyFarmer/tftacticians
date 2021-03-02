<template>
  <div
    tabindex="0"
    :class="['composition-list-item', { 'is-active': isActive }]"
    @click="activeEvent"
    @keydown.enter="activeEvent">
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
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: mapGetters("champions", ["getChampion"]),

  methods: {
    activeEvent() {
      this.$emit("onClick", this.composition.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.composition-list-item {
  box-shadow: $shadow;
  border-radius: 5px;
  padding: 0.7em 0.5em;
  margin-bottom: 0.5em;
  transition: 0.2s ease-in;
}
</style>
