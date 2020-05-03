/**
 * 测试 output 配置
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    // a: './lib/test1.js',
    // b: './lib/test2.js'
    lib: './lib/sayHello'
  }, // entry - string
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[contenthash].bundle1.js',
    libraryTarget: 'umd',
    // library: 'mylib'
    library:{
      root: 'mylib',
      amd: 'my-lib',
      commonjs: 'my-common-lib'
    }
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