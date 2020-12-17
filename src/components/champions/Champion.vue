<template>
  <a
    :class="['champion', { starred }]"
    @click="goToChampionView">
    <VImage
      :image="name"
      :dimension="dimension"
      :hoverable="hasPopover"
      :class="borderColour"
      dir="champions/icons"
      @mouseenter="displayPopover"
      @mouseleave="hidePopover"/>
    <ItemImageList
      v-if="items.length"
      class="champion-items"
      :items="items"
      dimension="16"/>
    <span
      v-if="caption"
      class="caption"
      v-text="name"/>
  </a>
</template>

<script>
import Champion from "@/mixins/Champion";
import ItemImageList from "@/components/items/ItemImageList";
import VImage from "@/components/utility/VImage";

export default {
  name: "Champion",

  components: { ItemImageList, VImage },

  mixins: [Champion],

  props: {
    name: {
      type: String,
      required: true
    },

    caption: {
      type: Boolean,
      required: false,
      default: false
    },

    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    starred: {
      type: Boolean,
      required: false,
      default: false
    },

    items: {
      type: Array,
      required: false,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.champion {
  display: flex;
  flex-direction: column;
  margin: 0 0.2em;
  position: relative;
  justify-content: center;

  .champion-items {
    display: flex;
    left: 50%;
    position: absolute;
    top: calc(100% - 10px);
    transform: translateX(-50%);
  }

  .image {
    margin: auto;
  }

  .caption {
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0.25rem 0;
    text-align: center;
    white-space: nowrap;
  }

  &.starred:before {
    content: "★★★";
    color: rgb(228, 193, 87);
    font-size: 14px;
    left: 50%;
    letter-spacing: -3px;
    margin-left: -1px;
    position: absolute;
    top: -8px;
    text-align: center;
    text-shadow: rgb(0, 0, 0) 0 3px 3px;
    transform: translateX(-50%);
    width: 100%;
    z-index: 10;
  }

  &:hover {
    .caption {
      color: $primary;
    }
  }
}
</style>
