
const Template = require('webpack').Template
const pluginName = 'chunk-name-map-css-file'
const extraCssType = 'css/extract-css-chunks'
const NOT_CSS_HASN = '31d6cfe0d16ae931b73c'
/**
 * TODO
 * 使用 extract-css-chunk 的时候
 * 某个路由 chunk 在没有使用 css 的情况下，也会生成 css chunkHash, 其值为 31d6cfe0d16ae931b73c
 * */

class RouterChunkToCssPlugin {
  apply (compiler) {
    const loadedCss = {}
    let sourceCode = []
    compiler.hooks.thisCompilation.tap(pluginName, compilation => {
      const { mainTemplate } = compilation
      mainTemplate.hooks.localVars.tap(pluginName, (source, chunk) => {
        compilation.chunks.forEach((chunk) => {
          if (/pages_.*?/.test(chunk.name) &&
             chunk.contentHash &&
             chunk.contentHash[extraCssType] &&
             !loadedCss[chunk.name] &&
             chunk.contentHash[extraCssType] !== NOT_CSS_HASN
          ) {
            sourceCode.push(`${chunk.name}: '${chunk.contentHash[extraCssType]}.css'`)
            loadedCss[chunk.name] = 1
          }
        })
        if (sourceCode.length && compilation.options.name === 'client') {
          return Template.asString([source, '//', '// set global function varibale for css manager', `window.getRouteMapCssFile = function (chunkName){ 
  var routerMap = {${sourceCode.join(',')}};
  return {all: routerMap, cssChunk: ${mainTemplate.requireFn}.p + routerMap[chunkName]};}`])
        }
        return source
      })
    })
  }
}
module.exports = RouterChunkToCssPlugin
