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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function (name) {
        console.log('name');
    };
    return Person;
}());
var man = {
    name: 'xx',
    age: 10,
    say: function (name) { return void ; }
};
