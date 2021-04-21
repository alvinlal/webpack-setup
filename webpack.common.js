const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // the entry point of our app
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
