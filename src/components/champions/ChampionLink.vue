<template>
  <VRouterLink
    v-if="id"
    :to="view"
    :class="['champion', isStarred]">
    <VImage
      :image="id"
      :dimension="dimension"
      :hoverable="popover"
      :dir="directory"
      :class="borderColour"
      :label="name"
      :caption="caption"
      :tooltip="tooltip"
      @mouseenter="displayPopover"
      @mouseleave="hidePopover"/>
    <ItemLinkList
      v-if="items.length"
      class="champion-items"
      :items="items"
      dimension="16"/>
    <slot/>
  </VRouterLink>
</template>

<script>
import Champion from "@/mixins/Champion";
import ItemLinkList from "@/components/items/ItemLinkList";
import VImage from "@/components/utility/VImage";
import VRouterLink from "@/components/utility/VRouterLink";

export default {
  name: "ChampionLink",

  components: { VRouterLink, ItemLinkList, VImage },

  mixins: [Champion],

  props: {
    id: {
      type: String,
      required: true
    },

    caption: {
      type: Boolean,
      required: false,
      default: false
    },

    tooltip: {
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
      type: Number,
      required: false,
      default: undefined
    },

    items: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  computed: {
    isStarred() {
      if (this.starred === 3) return "starred";
      if (this.starred === 2) return "starred two";

      return "starred";
    }
  }
};
</script>

<style lang="scss" scoped>
.champion {
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;

  &.starred .image:before {
    content: "★ ★ ★";
    color: $gold-light;
    font-size: 13px;
    left: 50%;
    letter-spacing: -3px;
    margin-left: -1px;
    position: absolute;
    top: -10px;
    text-align: center;
    text-shadow: rgb(0, 0, 0) 0 3px 3px;
    transform: translateX(-50%);
    width: 100%;
    z-index: 10;
  }

  &.two .image:before {
    color: $blue-light;
    content: "★ ★";
  }

  &:hover .image {
    border-color: $primary !important;
  }

  .champion-items {
    display: flex;
    flex-wrap: nowrap;
    left: 50%;
    margin: 0;
    position: absolute;
    top: calc(100% - 10px);
    transform: translateX(-50%);

    :deep(.item-image) {
      margin: 0;

      .image {
        border-width: 1px;
      }
    }
  }

  .image {
    backface-visibility: hidden;
    margin: 0 auto;
  }
}
</style>
