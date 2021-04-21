const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // build mode, can be production or development
  output: {
    filename: "main.[contenthash].js", // filename of output file ,
    //contenthash will be replaced by a unique hash each time the file is updated, this is for cache busting.
    //you have to use html-webpack-plugin, for generating the html file with correct script tag.
    path: path.resolve(__dirname, "dist"), // output directory name and path
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  plugins: [new CleanWebpackPlugin()],
});
