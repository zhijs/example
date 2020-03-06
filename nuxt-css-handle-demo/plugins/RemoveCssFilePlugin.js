// 处理源码拼接库
const Source = require('webpack-sources')
const OriginalSource = require('webpack-sources').OriginalSource
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const parser = require('@babel/parser');
const t = require('@babel/types');
const  Template = require('webpack').Template;
const pluginName = 'remove-unuse-css-file'
class RemoveCssFilePlugin {
  apply(compiler) {
 
   // 修改 runtime 
   compiler.hooks.thisCompilation.tap(pluginName, compilation => {
     const { mainTemplate } = compilation;
     mainTemplate.hooks.localVars.tap(pluginName, (source, chunk) => {
       const chunkMap = this.getCssChunkStr(chunk);
       if (Object.keys(chunkMap).length > 0) {
         return Template.asString([source, '', '// remove-unuse-css-file plugin', `${mainTemplate.requireFn}.remove_unse_css_file = function (ids) {
  ids.forEach(function(id) {
    var href = ${chunkMap}[id] + '.css';
    var fullhref = ${mainTemplate.requireFn}.p + href;
    if (!document) return;
    var links = document.getElementsByTagName('link');
    var head = document.getElementsByTagName('head');
    for(var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('rel') === 'stylesheet' && links[i].getAttribute('href') === fullhref) {
        head.removeChild(links[i])
      }
    }});
  }`]);
       }
       return source;
      });
    })
  }

  // 获取 chunkId 和 css 的映射关系
  getCssChunkStr(mainChunk) {
   let chunksIdToHash = []
   for (const chunk of mainChunk.getAllAsyncChunks()) {
     for (const module of chunk.modulesIterable) {
       if (module.type === 'css/extract-css-chunks') {
        debugger
        chunksIdToHash.push(`${chunk.id}: '${chunk.contentHash['css/extract-css-chunks']}'`)
         break;
       }
     }
   }

   return `{${chunksIdToHash.join(',')}}`;
 } 
}
module.exports = RemoveCssFilePlugin