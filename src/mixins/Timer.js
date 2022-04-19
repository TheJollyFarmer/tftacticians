export default {
  watch: {
    error: {
      handler: "setTimer"
    }
  },

  methods: {
    setTimer(value) {
      value ? this.countdown() : this.$emit("close");
    },

    countdown() {
      setTimeout(() => {
        this.closeEvent();
      }, 10000);
    }
  }
};
