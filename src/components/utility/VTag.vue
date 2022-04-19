<template>
  <div
    v-if="attached && closeable"
    class="tags has-addons">
    <span :class="classes">
      <slot/>
    </span>
    <a
      :class="['tag', 'is-delete', customClass]"
      @click="close()"/>
  </div>
  <span
    v-else
    :class="classes">
    <slot/>
    <a
      v-if="closeable"
      class="delete"
      @click="close()"/>
  </span>
</template>

<script>
export default {
  name: "VTag",

  props: {
    type: {
      type: String,
      required: false,
      default: "is-primary"
    },

    size: {
      type: String,
      required: false,
      default: "is-medium"
    },

    rounded: {
      type: Boolean,
      required: false,
      default: false
    },

    closeable: {
      type: Boolean,
      required: false,
      default: false
    },

    attached: {
      type: Boolean,
      required: false,
      default: false
    },

    customClass: {
      type: String,
      required: false,
      default: ""
    }
  },

  emits: ["close"],

  computed: {
    classes() {
      return [
        "tag",
        this.type,
        this.size,
        {
          "is-rounded": this.rounded,
          "is-closeable": this.rounded
        }
      ];
    }
  },

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  &.is-medium,
  &.is-medium + .tag {
    font-size: 0.8rem;
  }

  &.is-primary {
    background-color: $primary;
    color: $white;
    font-weight: bold;
  }

  &.is-delete {
    background-color: var(--layer);
    color: var(--colour);
    transition: $hover-in;

    &:hover {
      background-color: var(--hover) !important;
      transition: $hover-out;
    }
  }
}
</style>
