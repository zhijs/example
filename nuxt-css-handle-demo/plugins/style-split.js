class SplitStylePlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      'SplitStylePlugin',
      (compilation, callback) => {
        compilation.chunkTemplate.hooks.renderManifest.tap('SplitStylePlugin', (result, { chunk }) => {
           console.log('chunk-----', chunk.entryModule)
           console.log(typeof modules)
        })
      });
  }  
}
module.exports = SplitStylePlugin