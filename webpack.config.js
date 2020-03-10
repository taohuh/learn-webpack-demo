require("dotenv").config();

const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
    }),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules"),
    ]),
  ],
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true,
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    }
  }
};