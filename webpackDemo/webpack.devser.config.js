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
    a: './lib/test1.js',
    // b: './lib/test2.js'
  }, // entry - string
  devtool: 'source-map',
  devServer: {
     port: 9009,
     publicPath: '/assets/', // localhost:9009/assets -> 相当于访问打包在内存中的 index.html
     contentBase: path.join(__dirname, 'lib'), // 当前工程目录下 lib 文件夹为静态资源地址
     /**
      * 相当于 app.use('/static', express.static(path.join(__dirname, 'lib')))
      * localhost:9009/statis/common.css === __dirname/lib/common.css
      */
     contentBasePublicPath: '/static'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[contenthash].bundle1.js'
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