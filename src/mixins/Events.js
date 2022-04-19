export default {
  mounted() {
    this.addResizeListener();
    this.addColorSchemeListener();
  },

  beforeDestroy() {
    this.removeResizeListener();
    this.removeThemeListener();
  },

  methods: {
    addColorSchemeListener() {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", this.toggleDarkTheme);
    },

    addResizeListener() {
      window.addEventListener("resize", this.setWindowWidth);
    },

    removeResizeListener() {
      window.removeEventListener("resize", this.setWindowWidth);
    },

    removeThemeListener() {
      window.removeEventListener("change", this.toggleDarkTheme);
    }
  }
};
