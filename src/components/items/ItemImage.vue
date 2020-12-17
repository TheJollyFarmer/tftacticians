<template>
  <a
    v-tooltip:bottom="tooltip"
    class="item"
    @click="goToItemView">
    <VImage
      :image="name"
      :dimension="dimension"
      :hoverable="hasPopover"
      dir="items"
      @mouseenter="displayPopover"
      @mouseleave="hidePopover"/>
    <Item
      v-if="carousel"
      :name="carousel"
      class="carousel-full"
      dimension="18"/>
  </a>
</template>

<script>
import Popover from "@/mixins/Popover";
import VImage from "@/components/utility/VImage";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Item",

  components: { VImage },

  mixins: [Popover],

  props: {
    name: {
      type: String,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "40"
    },

    carousel: {
      type: String,
      required: false,
      default: ""
    }
  },

  computed: {
    ...mapGetters("items", ["getItem"]),

    item() {
      return this.getItem(this.name);
    },

    itemType() {
      return this.item.components ? "combined" : "component";
    },

    tooltip() {
      return this.hasPopover ? "" : this.name;
    }
  },

  methods: {
    ...mapActions({ setFilter: "items/setFilter" }),

    goToItemView() {
      this.resetPopover();

      this.setFilter({
        filter: this.name,
        type: this.itemType
      });

      if (this.$route.path !== "/items") {
        this.$router.push("/items");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  margin: 0 0.2em;
  position: relative;
  justify-content: center;

  .image {
    border-color: black;
  }

  .carousel-full {
    position: absolute;
    bottom: -5px;
    right: -5px;
  }
}
</style>
