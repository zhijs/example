/**
 *  Module 配置测试
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    a: './lib/test1.js',
  },
  devServer: {
     port: 9009,
     publicPath: '/', // localhost:9009/assets -> 相当于访问打包在内存中的 index.html
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[contenthash].bundle1.js'
  },
  module: {
    noParse: /noParse\.js/,
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader 
        },
        "css-loader"
      ]
    }
  ]
  },
  // optimization: {
  //   runtimeChunk: true
  // },
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    }),
    new HtmlWebpackPlugin()
  ]
}