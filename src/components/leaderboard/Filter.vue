<template>
  <VFilter
    v-slot="{ option }"
    :options="options"
    :is-active="expand"
    :label="label">
    <VFilterOption
      :key="option"
      :option="option"
      :is-active="isActive(option)"
      :has-checkbox="checkbox">
      <slot
        name="link"
        :option="option">
        <VRouterLink :to="{ params: { [model]: option }}">
          <slot :option="option"/>
        </VRouterLink>
      </slot>
    </VFilterOption>
  </VFilter>
</template>

<script>
import VFilter from "@/components/utility/VFilter";
import VFilterOption from "@/components/utility/VFilterOption";
import VRouterLink from "@/components/utility/VRouterLink";

export default {
  name: "Filter",

  components: {
    VFilter,
    VFilterOption,
    VRouterLink
  },

  props: {
    options: {
      type: Array,
      required: true
    },

    label: {
      type: String,
      default: "",
      required: false
    },

    expand: {
      type: Boolean,
      required: false,
      default: true
    },

    active: {
      type: [String, Number, Array],
      required: false,
      default: ""
    },

    checkbox: {
      type: Boolean,
      required: false,
      default: false
    },

    model: {
      type: String,
      required: false,
      default: ""
    }
  },

  methods: {
    isActive(option) {
      return Array.isArray(this.active)
        ? this.active.includes(option)
        : this.active === option;
    }
  }
};
</script>
