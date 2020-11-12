function loadWASM (path, imports = {}) {
  return fetch(path)
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.compile(buffer))
  .then( module => {
    imports.env = imports.env || {}
    imports.env.memoryBase = imports.env.memoryBase || 0
    if (!imports.env.memory) {
      imports.env.memory = new WebAssembly.Memory({initial: 256})  
    }

    imports.env.tableBase = imports.env.table || 0
    imports.env.stackSave = () => {}
    imports.env.__memory_base = imports.env.__memory_base || 0
    imports.env.__table_base = imports.env.__table_base || 0

    if (!imports.env.table) {
      imports.env.table = new WebAssembly.Table({initial: 0, element: 'anyfunc'})  
    }
    return WebAssembly.instantiate(module, imports)
  })
}
loadWASM('./unique.wasm')
.then(instance => {
  console.log(instance.exports)
  console.log(instance.exports._Z9uniqueArrv())  
})
// const buffer = await response.arrayBuffer();
// const obj = await 
// console.log(obj.instance.exports.add(1, 2));  // "3"