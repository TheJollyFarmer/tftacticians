<template>
  <VRouterLink
    :to="view"
    class="item-image"
    @mouseenter="displayPopover"
    @mouseleave="hidePopover">
    <VImage
      :image="item.id"
      :dimension="dimension"
      :hoverable="popover"
      :dir="'items/' + set"
      :label="item.name"
      :caption="caption"
      :tooltip="tooltip"/>
    <ItemLink
      v-if="carousel"
      :id="carousel"
      class="carousel-full"
      dimension="18"/>
  </VRouterLink>
</template>

<script>
import Popover from "@/mixins/Popover";
import VImage from "@/components/utility/VImage";
import VRouterLink from "@/components/utility/VRouterLink";
import { mapGetters } from "vuex";

export default {
  name: "ItemLink",

  components: { VImage, VRouterLink },

  mixins: [Popover],

  props: {
    id: {
      type: [Number, String],
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

    carousel: {
      type: Number,
      required: false,
      default: undefined
    }
  },

  computed: {
    ...mapGetters({
      getItem: "items/getItem",
      set: "getActiveDataSet"
    }),

    item() {
      return this.getItem(this.id);
    },

    view() {
      return {
        name: "items",
        params: { item: this.item.name }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.item-image {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  &:hover {
    :deep(.image) {
      border-color: var(--primary);
    }
  }

  :deep(.image) {
    border-color: var(--colour);
  }

  .carousel-full {
    bottom: -5px;
    position: absolute;
    right: -5px;

    .image {
      border-width: 1px;
    }
  }
}
</style>
