const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development", // build mode, can be production or development
  output: {
    filename: "main.js", // filename of output file ,
    //contenthash will be replaced by a unique hash each time the file is updated, this is for cache busting.
    //you have to use html-webpack-plugin, for generating the html file with correct script tag.
    path: path.resolve(__dirname, "dist"), // output directory name and path
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ], // generates index.html with correct script tags using a template
  module: {
    rules: [
      {
        test: /\.scss$/, // use the css-loader for file imports that ends with .css
        use: [
          "style-loader", // 3. Injects style into DOM
          "css-loader", // 2. Turns css into javascript
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
});
