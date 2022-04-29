<template>
  <div :class="['control', iconClasses()]">
    <input
      ref="input"
      v-autofocus="autofocus"
      :value="modelValue"
      :type="newType"
      :placeholder="placeholder"
      :class="['input', size, customClass, inputErrorClass]"
      :style="{ width : width }"
      required
      @blur="blurEvent"
      @input="inputEvent"
      @keyup.enter="enterEvent">
    <VFavicon
      v-if="iconLeft"
      :icon="iconLeft"
      class="is-small is-left"/>
    <VFavicon
      v-if="iconType"
      v-tooltip:right="errorBag"
      :icon="iconType"
      :class="['is-small is-right', iconErrorClass]"/>
    <slot/>
  </div>
</template>

<script>
import VFavicon from "./VFavicon";

export default {
  name: "VInput",

  components: { VFavicon },

  props: {
    modelValue: {
      type: [String, Number],
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "search"
    },

    placeholder: {
      type: String,
      required: false,
      default: "Find a Summoner..."
    },

    size: {
      type: String,
      required: false,
      default: ""
    },

    width: {
      type: String,
      required: false,
      default: ""
    },

    iconLeft: {
      type: String,
      required: false,
      default: "search"
    },

    iconRight: {
      type: String,
      required: false,
      default: ""
    },

    customClass: {
      type: String,
      required: false,
      default: ""
    },

    autofocus: {
      type: Boolean,
      required: false,
      default: true
    },

    validation: {
      type: Boolean,
      required: false,
      default: false
    },

    errors: {
      type: String,
      required: false,
      default: ""
    }
  },

  emits: ["blur", "update:modelValue", "onEnter"],

  data() {
    return {
      newType: this.type,
      isValid: false,
      errorBag: ""
    };
  },

  computed: {
    iconErrorClass() {
      return {
        "has-text-danger": this.errorBag,
        "has-text-primary": this.isValid
      };
    },

    inputErrorClass() {
      return {
        "is-danger": this.errorBag,
        "is-primary": this.isValid
      };
    },

    iconType() {
      if (this.iconRight) return this.iconRight;
      if (this.isValid) return "check";

      return this.errorBag ? "exclamation-circle" : "";
    }
  },

  watch: {
    errors() {
      this.errorBag = this.errors;
      this.isValid = false;
    }
  },

  methods: {
    validate(input) {
      input.checkValidity()
        ? this.setState("", true)
        : this.setState(input.validationMessage, false);
    },

    setState(errors, validity) {
      this.errorBag = errors;
      this.isValid = validity;
    },

    blurEvent(e) {
      this.$emit("blur", e);

      if (this.validation) {
        this.validate(e.target);
      }
    },

    inputEvent({ target }) {
      this.$emit("update:modelValue", target.value);
    },

    enterEvent() {
      this.$emit("onEnter");
    },

    iconClasses() {
      return {
        "has-icons-left": this.iconLeft,
        "has-icons-right": this.iconRight || this.iconType
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  background-color: var(--layer);
  border: none;
  box-shadow: $shadow;
  color: var(--colour);
  transition: $hover-in;
  transition-property: background-color, color;

  &::placeholder {
    color: var(--colour);
  }

  &::-webkit-search-cancel-button {
    //noinspection CssUnknownTarget
    content: url("/api/images/general/cross.svg");
    opacity: 0;
    position: absolute;
    right: 0.5em;
    top: 50%;
    transform: translateY(-50%);
    width: 1em;
    -webkit-appearance: none;
  }

  &:focus,
  &:active,
  &:not(:placeholder-shown) {
    border: none;
    box-shadow: $shadow;
    color: var(--colour);

    &::-webkit-search-cancel-button {
      opacity: 1;
      pointer-events: all;
      filter: var(--search);
    }
  }

  & ~ .is-left,
  &:focus ~ .is-left {
    color: var(--colour) !important;
  }
}
</style>
