const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // build mode, can be production or development
  output: {
    filename: "main.[contenthash].js", // filename of output file ,
    //contenthash will be replaced by a unique hash each time the file is updated, this is for cache busting.
    //you have to use html-webpack-plugin, for generating the html file with correct script tag.
    path: path.resolve(__dirname, "dist"), // output directory name and path
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", // 2. Turns css into javascript
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
});
