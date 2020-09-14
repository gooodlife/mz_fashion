const webpack = require("webpack");
const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist", "public", "build"),
    compress: true,
    port: 9000,
    open: true,
    liveReload: true,
    watchOptions: {
      poll: true,
    },
  },
  entry: {
    app: "./src/app.js",
  },
  output: {
    filename: "public/build/bundle.js",
    sourceMapFilename: "public/build/bundle.map",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react",
              {
                plugins: ["@babel/plugin-proposal-class-properties"],
              },
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
