<template>
  <table :class="['table', classes]">
    <slot/>
  </table>
</template>

<script>
export default {
  name: "VTable",

  props: {
    bordered: {
      type: Boolean,
      required: false,
      default: false
    },

    striped: {
      type: Boolean,
      required: false,
      default: true
    },

    narrow: {
      type: Boolean,
      required: false,
      default: false
    },

    hoverable: {
      type: Boolean,
      required: false,
      default: true
    },

    fullwidth: {
      type: Boolean,
      required: false,
      default: true
    },

    centered: {
      type: Boolean,
      required: false,
      default: true
    },

    aligned: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    classes() {
      return {
        "is-centered": this.centered,
        "is-bordered": this.bordered,
        "is-striped": this.striped,
        "is-narrow": this.narrow,
        "is-hoverable": this.hoverable,
        "is-fullwidth": this.fullwidth,
        "is-aligned-center": this.aligned
      };
    }
  }
};
</script>

<style scoped>
.is-centered {
  margin-left: auto;
  margin-right: auto;
}

.is-aligned-center {
  text-align: center;
}
</style>
