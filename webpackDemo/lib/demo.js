// webpack.config.js
module.exports = {
  //....
  output: {
    libraryTarget: 'var',
    library: 'mylib'
  }
  //....
}
/**
 * 打包后的 bundle 如下所示
 * 其中，you_lib_code 是 一个立即执行函数
 * 函数体的返回值就是你的库的文件的导出
 */
var mylib = you_lib_code_wrapper