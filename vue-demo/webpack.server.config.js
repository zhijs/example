var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
var webpackConfig = merge(baseWebpackConfig, {
    target: 'node',
    entry: {
        app: './server-main.js'
    },
    devtool: false,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build-server.js',
        libraryTarget: 'commonjs2'
    },
    externals: Object.keys(require('./package.json').dependencies),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'production'
        })
    ]
})
module.exports = webpackConfig