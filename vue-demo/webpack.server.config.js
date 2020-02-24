var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackConfig = {
    target: 'node',
    entry: {
        app: './server-main.js'
    },
    module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'vue-style-loader',
           'css-loader'
         ],
       },
       {
         test: /\.vue$/,
         loader: 'vue-loader',
         options: {
           loaders: {
             // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
             // the "scss" and "sass" values for the lang attribute to the right configs here.
             // other preprocessors should work out of the box, no loader config like this necessary.
             'scss': [
               'vue-style-loader',
               'css-loader'
             ],
             'sass': [
               'vue-style-loader'
             ]
           }
           // other vue-loader options go here
         }
       },
       // {
       //   test: /\.js$/,
       //   loader: 'babel-loader',
       //   exclude: /node_modules/
       // },
       {
         test: /\.(png|jpg|gif|svg)$/,
         loader: 'file-loader',
         options: {
           name: '[name].[ext]?[hash]'
         }
       }
     ]
   },
    devtool: false,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build-server.js',
        libraryTarget: 'commonjs2'
    },
    // externals: Object.keys(require('./package.json').dependencies),
}
module.exports = webpackConfig