<template>
  <article 
    class="media"
    @click="clickEvent"
    @mouseenter="toggleHover"
    @mouseleave="toggleHover">
    <div :class="['media-left', alignSelf, wrap]">
      <slot name="mediaLeft"/>
    </div>
    <div :class="['media-content', mediaContentClasses, wrap]">
      <slot/>
    </div>
    <div 
      v-if="mediaRight" 
      :class="['media-right', alignSelf, wrap]">
      <slot 
        :hover="hover" 
        name="mediaRight"/>
    </div>
  </article>
</template>

<script>
import { computed } from "vue";

export default {
  name: "VMediaObject",

  props: {
    isVCentered: {
      type: Boolean,
      required: false,
      default: true
    },

    mediaIsRight: {
      type: Boolean,
      required: false,
      default: false
    },

    hasWrap: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  emits: ["onClick"],

  setup(props, { slots }) {
    const mediaRight = computed(() => !!slots.mediaRight);

    return { mediaRight };
  },

  data() {
    return {
      hover: false
    };
  },

  computed: {
    mediaContentClasses() {
      return {
        "has-text-right": this.mediaIsRight,
        "is-vcentered": this.isVCentered
      };
    },

    alignSelf() {
      return { "is-vcentered": this.isVCentered };
    },

    wrap() {
      return { "no-wrap": !this.hasWrap };
    }
  },

  methods: {
    clickEvent() {
      this.$emit("onClick");
    },

    toggleHover() {
      this.hover = !this.hover;
    }
  }
};
</script>

<style lang="scss" scoped>
.media {
  &.is-vcentered {
    align-self: center;
  }

  &.no-wrap {
    flex-wrap: nowrap;
  }

  & + .media {
    border-top: none;
    margin-top: 0;
  }
}
</style>
