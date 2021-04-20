const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // build mode, can be production or development
  entry: "./src/index.js", // the entry point of our app
  output: {
    filename: "main.[contenthash].js", // filename of output file ,
    //contenthash will be replaced by a unique hash each time the file is updated, this is for cache busting.
    //you have to use html-webpack-plugin, for generating the html file with correct script tag.
    path: path.resolve(__dirname, "dist"), // output directory name and path
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ], // generates index.html with correct script tags using a template
  module: {
    // specify loaders
    rules: [
      // specify files
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
};
