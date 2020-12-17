export default {
  props: {
    collection: {
      type: Array,
      required: true
    },

    label: {
      type: String,
      default: "cost",
      required: false
    }
  },

  methods: {
    addFilterEvent(filter) {
      this.$emit("apply", {
        filter,
        type: this.label
      });
    },

    removeFilterEvent(filter) {
      this.$emit("remove", {
        filter,
        type: this.label
      });
    }
  }
};
