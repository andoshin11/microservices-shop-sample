const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const path = require('path')


module.exports = (env, args = {}) => {
  const isProd = args.mode === 'production'

  return {
    mode: isProd ? "production" : "development",
    devServer: {
      contentBase: './dist'
    },
    entry: {
      app: './src/index.tsx'
    },
    output: {
      filename: isProd ? "[name].[chunkhash:8].js" : "[name].js",
      path: path.join(__dirname, "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        excludeChunks: ["published"],
        template: "src/index.html",
      }),
      new HtmlWebpackPlugin({
        excludeChunks: ["app"],
        template: "src/index.html",
        filename: "published.html",
      }),
      new ForkTsCheckerPlugin()
    ]
  }
}
