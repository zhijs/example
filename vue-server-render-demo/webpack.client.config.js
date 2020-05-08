var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
const VueSSRClientPlugin  = require('vue-server-renderer/client-plugin')
var baseWebpackConfig = require('./webpack.base.config')
var webpackConfig = merge(baseWebpackConfig, {
  entry: './src/entry-client.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: 'clinet-build.js'
  },
    plugins: [
    //这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    new VueSSRClientPlugin()
    ]
})
module.exports = webpackConfig