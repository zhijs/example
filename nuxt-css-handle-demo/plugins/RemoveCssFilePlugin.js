
const  Template = require('webpack').Template;
const pluginName = 'remove-unuse-css-file'
const extraCssType = 'css/extract-css-chunks'
class RemoveCssFilePlugin {
  apply(compiler) {
   const loadedCss = {}
   let sourceCode = []
   compiler.hooks.thisCompilation.tap(pluginName, compilation => {
      const { mainTemplate } = compilation;
      mainTemplate.hooks.localVars.tap(pluginName, (source, chunk) => {
       compilation.chunks.forEach((chunk) => {
          if (/pages_.*?/.test(chunk.name) && chunk.contentHash && chunk.contentHash[extraCssType] && !loadedCss[chunk.name]) {
            sourceCode.push(`${chunk.name}: '${chunk.contentHash[extraCssType]}'`)
            loadedCss[chunk.name] = 1
          }
       })
       if (sourceCode.length && compilation.options.name === 'client') {
         return Template.asString([source, '//', '// set global varibale for css manager', `window.route_map_css_file={${sourceCode.join(',')}}`]);
       }
        return source;
      });
      return true
   })
  }
}
module.exports = RemoveCssFilePlugin