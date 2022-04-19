export default {
  mounted() {
    document.addEventListener("click", this.closeEvent);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.closeEvent);
  },

  methods: {
    closeEvent(event) {
      if ((event && !this.$el.contains(event.target)) || !event) {
        this.$emit("close");
      }
    }
  }
};
