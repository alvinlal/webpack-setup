const path = require("path");

module.exports = {
  mode: "development", // build mode, can be production or development
  entry: "./src/index.js", // the entry point of our app
  output: {
    filename: "main.js", // filename of output file
    path: path.resolve(__dirname, "dist"), // output directory name and path
  },
};
