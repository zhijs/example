const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true // 开启热模块热加载
  },
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,  
        use: {
          loader: 'babel-loader',
          options: {
            "sourceMaps": true,
            presets: ['@babel/preset-env',  [
              "@babel/preset-react"
            ]],
            "plugins": [
              [
                  "@babel/transform-react-jsx",
                  {
                      "pragma": "h"
                  }
              ]
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg)\\?base64=1$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         publicPath: 'http://y.qq.com'  
      //       }
      //     },
      //   ],
      // },
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};