<template>
  <div :class="['control', { 'has-icons-left': icon }]">
    <div :class="['select', size, customClass, inputErrorClass]">
      <select
        v-autofocus="autofocus"
        :value="value"
        required
        @blur="blurEvent"
        @change="changeEvent">
        <option
          v-if="label"
          disabled 
          selected
          value="">
          {{ label }}
        </option>
        <option 
          v-for="(option, index) in options"
          :key="index"
          :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <v-favicon 
      v-if="icon" 
      :icon="icon"
      class="is-small is-left"/>
  </div>
</template>

<script>
import VFavicon from "./VFavicon";

export default {
  name: "VSelect",

  components: { VFavicon },

  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ""
    },

    label: {
      type: String,
      required: false,
      default: "Select"
    },

    options: {
      type: Array,
      required: true
    },

    icon: {
      type: String,
      required: false,
      default: ""
    },

    size: {
      type: String,
      required: false,
      default: ""
    },

    validation: {
      type: Boolean,
      required: false,
      default: false
    },

    hasErrors: {
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
      default: false
    }
  },

  data() {
    return {
      selected: "",
      isValid: false,
      errors: ""
    };
  },

  computed: {
    inputErrorClass() {
      return this.validation
        ? {
            "is-danger": this.errors,
            "is-primary": this.isValid
          }
        : "";
    }
  },

  methods: {
    blurEvent(e) {
      this.$emit("blur", e);

      if (this.validate) {
        this.validate(e.target);
      }
    },

    changeEvent(e) {
      this.$emit("input", e.target.value.toLowerCase());
    },

    validate(input) {
      input.checkValidity()
        ? this.setState("", true)
        : this.setState(input.validationMessage, false);
    },

    setState(errors, validity) {
      this.errors = errors;
      this.isValid = validity;
    }
  }
};
</script>
