const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  stats: 'verbose',
  devtool: 'source-map',
  entry: {
    test1: './lib/test1.js',
    test2: './lib/test2.js'
  }, // entry - string
  plugins:[
    new CleanWebpackPlugin()  
  ]
}