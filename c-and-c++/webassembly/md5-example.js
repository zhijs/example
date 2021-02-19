
/**
 * md5-example.js
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
    // console.log(event.target.result)
    buffer = event.target.result
    // console.log(buffer.byteLength)
    // console.log(_module)
    // wasm 模块分配内存,大小为文件 buffer 的字节
    const pr = _module._malloc(buffer.length)

    // 在 wasm 内存中，从 pr 偏移到 pr + buffer.byteLength 写入 buffer
    const tyarr = new Uint8Array(buffer)
    for (let i = 0; i < buffer.byteLength; i++) {
      _module.HEAP8[pr + i] = tyarr[i]
    }


    // 传入 c++, 输出字符串，检测是否正常传入
    console.log('=============wasm 输出文本内容 start===============')
    _module._printText(pr)
    console.log('=============wasm 输出文本内容 end===============\n\n')
    
   // 计算 md5 并返回指针
   console.log('=============wasm 计算 md5 start===============')
   const md5pr = _module._getMd5(pr)
   console.log('=============wasm 计算 md5 end===============\n\n')

   // buffer 转化为字符串, 每个字符占一个字节
   const ab2str = function (buf) {
     return String.fromCharCode.apply(null, new Uint8Array(buf)); //apply将数组参数传给方法作为分开的实参，见apply的用法
   }

   // 输出文件内容 md5 的结果
   console.log('=============javaScript 访问内存得到 md5 start===============')
   console.log(ab2str(_module.HEAP8.slice(md5pr, md5pr + 64)))
   console.log('=============javaScript 访问内存得到 md5 end===============\n\n')
   
   // 最后释放内存
   _module._free(pr)

  }
  
}