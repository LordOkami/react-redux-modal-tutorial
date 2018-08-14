const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");

var devConfig;
try {
  devConfig = require("./dev.config");
} catch (e) {
  if (e.code !== "MODULE_NOT_FOUND") throw e;
  console.log("dev.config.js not found... using default configuration");
  devConfig = {};
}

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  favicon: "./src/assets/favicon.ico"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = merge(devConfig, {
  entry: ["babel-polyfill", "./src"],
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "lodash",
              "@babel/syntax-dynamic-import",
              "@babel/proposal-object-rest-spread",
              "@babel/proposal-class-properties",
              "transform-semantic-ui-react-imports"
            ],
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    symlinks: false
  },
  plugins: [htmlPlugin, miniCssExtractPlugin],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "source-map"
});
