<template>
  <li
    :class="[type, { 'is-active': isActive }]"
    @click="clickEvent">
    <slot>
      <VImage
        image="cost"
        dimension="24"
        dir="stats"
        :has-border="false"/>
      <span v-text="option"/>
    </slot>
    <VToggle
      v-if="hasCheckbox"
      :is-active="isActive"/>
  </li>
</template>

<script>
import VImage from "@/components/utility/VImage";
import VToggle from "@/components/utility/VToggle";

export default {
  name: "VFilterOption",

  components: {
    VImage,
    VToggle
  },

  props: {
    option: {
      type: [String, Number],
      required: false,
      default: ""
    },

    hasCheckbox: {
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

  computed: {
    type() {
      return this.hasCheckbox
        ? "filter-option-checkbox"
        : "filter-option-image";
    }
  },

  methods: {
    clickEvent() {
      this.hasCheckbox ? this.toggleActive() : this.optionClicked();
    },

    toggleActive() {
      this.isActive
        ? this.$emit("remove", this.option)
        : this.$emit("add", this.option);
    },

    optionClicked() {
      this.$emit("set", this.option);
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-option-checkbox {
  align-items: center;
  display: flex;
  margin-bottom: 0.4em;
  padding: 0.5em 0.75em;
  position: relative;

  &.is-active {
    background-color: $white-ter;
  }

  &:hover {
    background: whitesmoke;
  }

  .image {
    margin-right: 1em;
  }

  span:first-of-type {
    padding-top: 3px;
  }
}

.filter-option-image {
  padding: 0.3em 0.08em;
  opacity: 0.7;

  &.is-active {
    opacity: 1;

    ::v-deep.image {
      border-color: $primary !important;
    }
  }
}
</style>
