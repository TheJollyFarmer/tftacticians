<template>
  <section @click="toggleList">
    <h2 :class="['filter-label', classes]">
      {{ label }}
      <VRotate
        v-if="canExpand"
        :rotate="displayOptions"/>
    </h2>
    <TransitionExpand>
      <ul
        v-show="displayOptions"
        class="filter-list"
        @click.stop>
        <slot/>
      </ul>
    </TransitionExpand>
  </section>
</template>

<script>
import TransitionExpand from "@/components/transitions/TransitionExpand";
import VRotate from "@/components/utility/VRotate";

export default {
  name: "VFilter",

  components: { TransitionExpand, VRotate },

  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "grey-dark"
    },

    size: {
      type: String,
      required: false,
      default: "5"
    },

    canExpand: {
      type: Boolean,
      required: false,
      default: true
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      displayOptions: this.isActive
    };
  },

  computed: {
    classes() {
      return [
        `has-text-${this.type}`,
        `is-size-${this.size}`,
        { "is-active": this.displayOptions }
      ];
    }
  },

  methods: {
    toggleList() {
      if (this.canExpand) {
        this.displayOptions = !this.displayOptions;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-label {
  display: flex;
  line-height: 1.25;
  padding: 0.5em 0.4em 0.5em 1em;

  &.is-active {
    background-color: $white-ter;
  }
}

.filter-list {
  margin-top: 1em;
  overflow: visible;
}
</style>
