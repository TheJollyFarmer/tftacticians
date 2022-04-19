<template>
  <TransitionFade>
    <component
      :is="component"
      v-if="collection.length"
      key="list"
      :tag="tag">
      <slot
        v-for="(item, index) in collection"
        :index="index"
        :item="item"/>
    </component>
    <VError
      v-else
      key="error"/>
  </TransitionFade>
</template>

<script>
import TransitionFade from "@/components/transitions/TransitionFade";
import VError from "@/components/utility/VError";
import { capitalise } from "@/utils/filters";
import { defineAsyncComponent } from "vue";

export default {
  name: "VList",

  components: { TransitionFade, VError },

  props: {
    collection: {
      type: [Array, Object],
      required: false,
      default: null
    },

    type: {
      type: String,
      required: false,
      default: "list"
    },

    tag: {
      type: String,
      required: false,
      default: "div"
    },

    animatable: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    component() {
      return this.animatable ? this.getComponent() : "ul";
    }
  },

  methods: {
    getComponent() {
      return defineAsyncComponent(() =>
        import("@/components/transitions/Transition" + capitalise(this.type))
      );
    }
  }
};
</script>

<style lang="scss" scoped>
ul,
div {
  overflow: hidden;

  > * + * {
    margin-top: $spacing-large;
  }
}
</style>
