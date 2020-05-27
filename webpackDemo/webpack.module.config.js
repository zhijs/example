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
    rules: [{
      test: /\.css$/,
      /**
       * 只有 lib/style/index.css 和 lib/style/common.css
       *  css 引入才会被 css-loader 处理， 等价于
       *  include:  path.join(__dirname, 'lib/style/') - 当 style 目录下只有 index.css 和 common.css 的时候
       */
      include: [
        path.join(__dirname, 'lib/style/'),
      ],
      /**
       * 等价于
       * use: [
       *  {
       *     loader: MiniCssExtractPlugin.loader 
       *   },
       *   "css-loader"
       * ]
       */
      use: (info) => {
        /**
         * type info {
         *  compiler // 当前 webpack 编译对象
         *  issuer // 当前入口模块
         *  realResource // 模块的绝对路径
         *  resource // 一般情况下等于 realResource
         * }
         * 
         */
        return [
          {
            loader: MiniCssExtractPlugin.loader 
          },
          "css-loader"
        ]  
      }
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