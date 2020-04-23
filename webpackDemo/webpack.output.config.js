/**
 * 测试 output 配置
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
debugger
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  stats: 'verbose',
  devtool: 'source-map',
  entry: {
    a: './lib/test1.js',
    b: './lib/test2.js'
  }, // entry - string
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js'
  },
  module: {
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
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[chunkhash].css",
    })
  ]
}