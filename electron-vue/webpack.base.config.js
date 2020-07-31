const path = require('path')
module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 9008,
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'main-render') 
    }  
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'  
        ]
      },
      {
        test: /\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'  
        ]
      }

    ]
  }
}