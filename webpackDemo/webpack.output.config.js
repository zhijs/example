/**
 * 测试 output 配置
 */
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  stats: {
    all: undefined,
    chunks: true,
    chunkModules: true,
    assets: true,
    colors: true,
    modules: false,
    timings: true,
    children: true
  },
  entry: ['./lib/test1.js'],
  // entry: {
  //   a: './lib/test1.js'
  //   // b: './lib/test2.js'
  // }, // entry - string
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[id].bundle1.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        // {
        //   loader: MiniCssExtractPlugin.loader 
        // },
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
    // new MiniCssExtractPlugin({
    //   filename: "[contenthash].css",
    // }),
    new HtmlWebpackPlugin()
  ]
}