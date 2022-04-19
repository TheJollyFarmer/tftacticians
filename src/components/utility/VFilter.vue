<template>
  <section
    class="filter layer"
    @click="toggleList">
    <h2 :class="['filter-label', classes]">
      {{ label }}
      <VRotate
        v-if="canExpand"
        :rotate="displayOptions"/>
    </h2>
    <TransitionExpand>
      <div v-show="displayOptions">
        <VList
          v-slot="{ item }"
          :collection="options"
          :class="['filter-list', $attrs.class]"
          :animatable="animatable"
          type="grid"
          tag="ul"
          @click.stop>
          <slot :option="item"/>
        </VList>
      </div>
    </TransitionExpand>
  </section>
</template>

<script>
import VList from "@/components/utility/VList";
import VRotate from "@/components/utility/VRotate";
import { defineAsyncComponent } from "vue";

const TransitionExpand = defineAsyncComponent(() =>
  import("@/components/transitions/TransitionExpand")
);

export default {
  name: "VFilter",

  components: {
    TransitionExpand,
    VList,
    VRotate
  },

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },

    options: {
      type: Array,
      required: true
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
    },

    animatable: {
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
      return [`is-size-${this.size}`, { "is-active": this.displayOptions }];
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
.filter {
  margin-bottom: $spacing-large;
  padding: 0;

  &:hover {
    background-color: var(--layer);
  }

  &:last-child {
    margin-bottom: 0;
  }

  .filter-label {
    border-radius: $radius;
    display: flex;
    letter-spacing: 0.1em;
    padding: $spacing-small 0.6em $spacing-small 0.8em;
    position: relative;
    text-transform: uppercase;

    &.is-active:hover,
    &.is-active {
      background: var(--active);
      border-radius: $radius $radius 0 0;
    }
  }

  .filter-list {
    display: grid;
    padding: $spacing-large;
  }
}
</style>
