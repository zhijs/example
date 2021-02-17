
/**
 * Javascript 访问 c/c++ 内存里面的数据
 */


// wasm 胶水代码导出一个 wasm 对象为 Promise
window.WasmModule().then(module => {

  // 调用  c++ 导出的方法，得到内存地址，内存地址是偏移的字节数
  const pr = module._get_int_addr()
  console.log(module)
  //用 HEAP32 来访问内存中对应的数据，表示将内存地址按每个元素 4 个字节来访问
  console.log(module.HEAP32[pr / 4]) // 17
  
  // 更改 c++ 里面的变量数据
  module.HEAP32[pr / 4] = 20
  
  console.log(module._print_var())
})