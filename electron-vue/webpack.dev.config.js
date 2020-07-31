
var merge = require('webpack-merge');
const base = require('./webpack.base.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = merge(base, {
  mode: 'development',
  entry: path.resolve(__dirname, 'main-render/index.js'),
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'main-render/index.html') 
    })
  ]
})