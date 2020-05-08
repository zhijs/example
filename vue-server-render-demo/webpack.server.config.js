var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
var baseWebpackConfig = require('./webpack.base.config')
var webpackConfig = merge(baseWebpackConfig, {
    target: 'node',
    entry: {
        app: './src/entry-server.js'
    },
    devtool: false,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: Object.keys(require('./package.json').dependencies),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'production'
        }),
    //这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    new VueSSRServerPlugin()
    ]
})
module.exports = webpackConfig