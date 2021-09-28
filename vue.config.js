const path = require("path");

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8088
  },
  productionSourceMap: true,
  publicPath: "",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    }
  }
};
