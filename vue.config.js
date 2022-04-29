const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        sourceMap: true,
        prependData: `
          @use "sass:math";
          @import "@/assets/sass/variables.scss";
          @import "~bulma/sass/utilities/initial-variables";
        `
      }
    }
  },
  configureWebpack: {
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: []
      })
    ]
  }
};
