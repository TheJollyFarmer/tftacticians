export default {
  computed: {
    placementColour() {
      return this.placement === 1
        ? ""
        : this.placement <= 4
          ? "is-secondary"
          : "is-tertiary";
    }
  }
};
