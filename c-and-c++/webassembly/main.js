var fileData
var wasmInstance

function loadWASM (path, imports = {}) {
  return fetch(path)
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.compile(buffer))
  .then( module => {
    imports.env = imports.env || {}
    // imports.env.memoryBase = imports.env.memoryBase || 0
    // if (!imports.env.memory) {
    //   imports.env.memory = new WebAssembly.Memory({initial: 256})  
    // }

    // imports.env.tableBase = imports.env.table || 0
    // imports.env.stackSave = () => {}
    // imports.env.__memory_base = imports.env.__memory_base || 0
    // imports.env.__table_base = imports.env.__table_base || 0

    // if (!imports.env.table) {
    //   imports.env.table = new WebAssembly.Table({initial: 0, element: 'anyfunc'})  
    // }
    return WebAssembly.instantiate(module, imports)
  })
}
loadWASM('./c_plus_modules.wasm')
.then(instance => {
  wasmInstance = instance.exports
  console.log(wasmInstance)
  let buffer = new ArrayBuffer(length)
  // 得到 wasm 里面的内存
  var p = new Uint8Array(buffer);
  p[10] = 1, p[1] = 2, p[2] = 3

  console.log('调用 wasm add(2, 3)=', wasmInstance.add(2, 3))

  // 传递指针
  console.log('传递指针=', wasmInstance.mylog(p))
  // console.log(instance.exports)
})
// const buffer = await response.arrayBuffer();
// const obj = await 
// console.log(obj.instance.exports.add(1, 2));  // "3"
// var fileDom = document.getElementById('file')
// fileDom.onchange = function (event) {
//   // fileData = fileDom.files[0]
//   var reader = new FileReader();
//   reader.onload = function(e) {
//      fileData = e.target.result;
//      wasmInstance.memory.buffer = fileData
//      console.log(fileData.length)
     
//      let buffer = new ArrayBuffer(length)
//      // 得到 wasm 里面的内存
//      var p = new Uint8Array(buffer);
//      p[0] = 1, p[1] = 2, p[2] = 3
//      // 计算 md5 值
     
     
//   };
//   reader.readAsArrayBuffer(fileDom.files[0])
// }
