module.exports = {
  //....
  output: {
    filename: '[contenthash].bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader 
        },
        "css-loader"
      ]}]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    })
  ]
}