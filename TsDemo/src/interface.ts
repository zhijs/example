// interface Point {
//   x: Number
// }
// interface Point {
//   y: Number
// }
// /**
//  * 这里相当于
//  * interface Point {
//  *   x: Number,
//  *   y: Number
//  * }
//  */

// class MyPoint implements Point {
    
// }

// interface Person {
//   readonly name: String
// }
// const p:Person = {name: 'hh'}
// p.name = 'dd'

/**
 * interface 可以定义函数类型
 * 只需要定义函数参数类型和返回值类型
 * 不需要函数体
 */
// interface Person { // Person 是一个函数类型
//    (name: String): String;
// }
// let p: Person = (name: String): String => {return `hello ${name}`} 

// // 参数名可以和 interface不 一致
// let p1: Person = (_name: String): String => {return `hello ${_name}`} 

// /**
//  * 字符串和数字索引
//  * 其中索引变量名，如 key 可以随意变换
//  */
// interface StringArray {
//   [index: number]: String // [key: number]: String
// }
// interface StringObj {
//   [index: string]: String  
// }
// var strArr: StringArray = ['a', 'b']
// strArr[1]

// var strObj:StringObj  = {
//   a: 'a',
//   b: 'b'  
// }

// interface PointX {
//   x: number  
// }
// interface PointY {
//   y: number  
// }
/**
 * 相当于 
 * interface PointZ {
 *   x: number
 *   y: number  
 *   z: number 
 *  }
 */
// interface PointZ extends PointX, PointY {
//   z: number 
// }
// let point: PointZ = {
//   x: 1,
//   y: 2,
//   z: 3
// }

// class Person {
//   age: number
//   say(name: String): void {
//     console.log('name')
//   }  
// }
/**
 * 继承类，相当于继承
 * 类的属性
 */
interface Man extends Person {
  name: String
}

const man: Man = {
  name: 'xx',
  age: 10,
  say: (name: String): void => {
    console.log(`hi ${name}`)  
  }
}


interface Obj{
  a: String,
  b: String  
}
var f: Obj = {
  a: 'a',
  b: 'b'  
}
var k: Obj
// type Keys = keyof Obj
// k.c = '1'
var key: String
for (key in f) {
  console.log(f[key])
}
