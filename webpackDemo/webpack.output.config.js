/**
 * 测试 output 配置
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
  devtool: 'source-map',
  entry: {
    a: './lib/test1.js',
    b: './lib/test2.js'
  }, // entry - string
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[id].[hash].bundle.js'
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
    new CleanWebpackPlugin()
    // new MiniCssExtractPlugin({
    //   filename: "[chunkhash].css",
    // })
  ]
}