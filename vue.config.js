module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        sourceMap: true,
        prependData: `
          @import "@/assets/sass/variables.scss";
          @import "~bulma/sass/utilities/initial-variables";
        `
      }
    }
  }
};
