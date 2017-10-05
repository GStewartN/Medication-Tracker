const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: "app.bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "#source-map",

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "build"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        exclude: resolve(__dirname, "src/styles/styles.css"),
        options: {
         modules: true,
         localIdentName: "[name]__[local]___[hash:base64:5]"
       }
     },
     {
       test: resolve(__dirname, "src/styles/styles.css"),
       loader: "css-loader"
     }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "template.ejs",
      appMountId: "react-app-root",
      title: "Medication Tracker",
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ],
};
