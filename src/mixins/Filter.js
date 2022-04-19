export default {
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

    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  emits: ["apply", "remove"],

  methods: {
    addFilterEvent(filter) {
      this.$emit("apply", filter);
    },

    removeFilterEvent(filter) {
      this.$emit("remove", filter);
    }
  }
};
