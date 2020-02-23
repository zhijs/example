class SplitStylePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'SplitStylePlugin',
      (compilation, callback) => {
        callback();
      }
    );
  }  
}
module.exports = SplitStylePlugin