// class Person {
//   public name: String //
//   constructor (name: String) {
//     this.name = name  
//   }
//   log () {
//     console.log(this.name) // 类的内部访问
//   }
// }

// class Man extends Person {
//   constructor (name) {
//     super(name)  
//   }
//   say () {
//     console.log(this.name) // 子类
//   }
// }

// var person = new Person('lili')
// var man = new Man('xx')
// person.name // 实例 protected 实例不能访问
// man.name // 实例  protected 实例不能访问

class MyMath {
  static PI: number  = 3.1415926
  static getPerimeter(r: number ): number{
    return 2 * r * this.PI //  2*R*MyMath.PI 也可以
  }
}
// var myMath = new MyMath()
// // myMath.PI // 错误
// MyMath.PI // 正确

// abstract class Animal { // 抽象类, 只能用于继承
//   abstract howl(): void // 需要实现的方法，没有函数体
//   move() {
//     console.log('move')  
//   }
// } 

// var a = new Animal() // 抽象类不能被实例化

// class Dog extends Animal {
//   howl () { // 必须实现的方法
//     console.log('wang~')  
//   }
// }

// const dog = new Dog()
// dog.move() // 继承了抽象类实现的方法

/**
 * 类实现接口, 使用 implements 关键字
 * 可以 implements 多个 interface
 */
interface PointX {
  x: number  
}
interface PointY {
  y: number
}
class PointZ implements PointX, PointY {
  x: number
  y: number
}

class Z extends PointZ, MyMath {

}