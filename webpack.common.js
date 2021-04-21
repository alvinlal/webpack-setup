module.exports = {
  entry: "./src/index.js", // the entry point of our app
  module: {
    // specify loaders
    rules: [
      // specify files
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
