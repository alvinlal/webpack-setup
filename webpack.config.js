const path = require("path");

module.exports = {
  mode: "development", // build mode, can be production or development
  entry: "./src/index.js", // the entry point of our app
  output: {
    filename: "main.js", // filename of output file
    path: path.resolve(__dirname, "dist"), // output directory name and path
  },
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
