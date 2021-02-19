
/**
 * wasm 实现文本的的 md5 计算
 */

let _module // 保存 wasm 模块对象

// wasm 胶水代码导出一个 wasm 对象为 Promise
window.WasmModule().then(module => {
  console.log('hello world md5 值')
  module._printMd5()
  _module = module
});


// 处理文件读取
document.getElementById('file').onchange = function(e){
  let file = e.target.files[0],
    reader = new FileReader(),
    buffer;

  if(file){
    reader.readAsArrayBuffer(file)
  }
  reader.onloadend = function(event){ 
    console.log(event.target.result)
  }
  
}