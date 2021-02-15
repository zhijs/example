/**
 *  简单调用 wasm 的 add 方法
 */

var wasmInstance

function loadWASM (path, imports = {}) {
  return fetch(path)
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.compile(buffer))
  .then( module => {
    imports.env = imports.env || {}
    return WebAssembly.instantiate(module, imports)
  })
}
loadWASM('./c_plus_modules.wasm')
.then(instance => {
  wasmInstance = instance.exports
  console.log('调用 wasm add(2, 3)=', wasmInstance.add(2, 3))
})