<template>
  <li
    :class="['menu-item', { 'is-active': active }]"
    @click="toggleList">
    <a>
      {{ label }}
      <VRotate
        v-if="hasList"
        :rotate="expanded"/>
    </a>
    <TransitionExpand>
      <ul
        v-if="hasList"
        v-show="expanded"
        @click.stop>
        <slot/>
      </ul>
    </TransitionExpand>
  </li>
</template>

<script>
import TransitionExpand from "@/components/transitions/TransitionExpand";
import VRotate from "@/components/utility/VRotate";

export default {
  name: "VMenuItem",
  components: { TransitionExpand, VRotate },

  props: {
    label: {
      type: String,
      required: true
    },

    hasList: {
      type: Boolean,
      required: false,
      default: false
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false
    },

    isExpanded: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      expanded: this.isExpanded
    };
  },

  computed: {
    active() {
      return this.hasList ? this.expanded : this.isActive;
    }
  },

  methods: {
    toggleList() {
      this.hasList
        ? (this.expanded = !this.expanded)
        : this.$emit("onClick", this.label);
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-item {
  color: $grey-dark;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;

  &.is-active > a {
    background-color: $white-ter;
  }

  a {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: $shadow;
    display: flex;
    padding-left: 1em;
    position: relative;
  }
}
</style>
