<template>
  <component
    :is="component"
    :to="path"
    :disabled="isDisabled"
    :aria-label="aria">
    <slot/>
  </component>
</template>

<script>
import { hyphenise } from "@/utils/helpers";

export default {
  name: "VRouterLink",

  props: {
    to: {
      type: Object,
      required: true
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    aria: {
      type: String,
      required: false,
      default: "Link"
    }
  },

  computed: {
    component() {
      return this.disabled ? "span" : "RouterLink";
    },

    isDisabled() {
      return this.disabled ? true : null;
    },

    path() {
      let path = this.to;

      if (path.params) this.formatParams(path.params);

      return path;
    }
  },

  methods: {
    formatParams(params) {
      return Object.entries(params).forEach(
        ([key, param]) => (params[key] = hyphenise(param))
      );
    }
  }
};
</script>
