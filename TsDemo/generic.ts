/**
 * 实现一个 identity 函数
 * 这个函数接受一个参数，并返回这个参数
 */
// function identity(arg: number): number {
//   return arg  
// }

// // 啊！ 需要实现字符串
// function identity1(arg: String): String {
//   return arg  
// }

// // 干脆 any 一把梭
// function identityAll(arg: any) {
//   return arg  
// }

/**
 * 使用 any 类型会导致这个函数可以接收任何类型的 arg 参数
 * 这样就丢失了一些信息：传入的类型与返回的类型应该是相同的
 * 参数和返回值都是 any 的话，可能会有 参数 number, 返回值 String
 * 类似这种不一致的问题
 */

 /**
  * 使用类型变量 泛型
  */
function identity<T>(arg: T): T {
  return arg  
}

/**
 * 使用方式 1
 * 传入所有的参数，包含类型参数
 */
var output = identity<String>('String') // 这里 output 会被类型推断为 String

/**
 * 使用方式 2
 * 只传入函数参数，编译器会根据传入的参数自动地帮助我们确定T的类型
 * 这就是类型推断
 */
var output = identity<String>('String')
var output1 = identity('String') // 这里 output 会被类型推断为 String

