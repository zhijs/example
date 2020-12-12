
/**
 * 接受一个构造函数作为参数，而且该参数必须继承自 { new (...args: any[]): {} }
 * 返回一个新的类，这个类继承了构造函数，且在父构造函数中添加了一些属性
 * */
function classDecorator<T extends { new (...args: any[]): {} }>(  constructor: T) {
  return class extends constructor {
         newProperty = "new property";
         hello = "override";
       };
     }
 
 @classDecorator
 class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}
 const greeter: Greeter = new Greeter("world");
 console.log({ greeter }, greeter.hello);


interface Obj {
  [key: string]: string
}

/**
* 属性装饰器
* 接收一个对象，以及对象的 key 值，然后可以修改对象对应的 key 值
*/

function setDefaultValue(target: Object, propertyName: string) {
  target[propertyName] = "Nealayng";
}
class Person1 {
  @setDefaultValue
  name: string;
}
console.log(new Person1().name); // 输出: Nealayng




/**
 * 
 * 方法装饰器，方法装饰器表达式会在运行时当作函数被调用，并传入以下三个参数
 * target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * propertyName: 成员的名称
 * descriptor: 成员的属性描述符 
 */
function log( target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any> ) {
    const method = descriptor.value; // property 就是 say
    descriptor.value = function(...args: any[]) {
        // 将参数转为字符串
        const params: string = args.map(a => JSON.stringify(a)).join();
        const result = method!.apply(this, args); // 调用 say 方法
        // 将结果转为字符串
        const resultString: string = JSON.stringify(result);
        console.log(`Call:${propertyName}(${params}) => ${resultString}`);
        return result;
   };
}
class Author {
    constructor(private firstName: string, private lastName: string) {
    }

    @log
    say(message: string): string {
        return `${message} by: ${this.lastName}${this.firstName}`;
    }
}
const author:Author = new Author('Yang','Neal');
// 运行时调用 log 方法
author.say('《全站前端精选》');//Call:say("全站前端精选") => "全站前端精选 by: NealYang"



/**
 * 
 * 访问器装饰器，访问器装饰器表达式会在运行时当作函数被调用，并传入以下三个参数
 * target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * propertyName: 成员的名称
 * descriptor: 成员的属性描述符 
 */

function Enumerable( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
   descriptor.enumerable = false;
}
class Person {
    _name: string;

    constructor(name: string) {
      this._name = name;
    }
    @Enumerable
    get name() {
      return this._name;
    }
}
console.log("-- creating instance --");
let person = new Person("Diana");

console.log("-- looping --");

for (let key in person) {
  console.log(key + " = " + person[key]);
}

  
  /**
   * 参数装饰器表达式
   * 会在运行时当作函数被调用，传入三个参数
   * target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
   * propertyName: 成员的名称
   * paramIndex: 参数的位置 
  */
  
  function defaultParam (target: Object, propertyName: string, paramIndex: number) {
    if (target)
  }
  class Task { 
      run(@notNull name: string): void {
          console.log("running task, name: " + name);
      }
  }
  console.log("-- creating instance --");
  let task: Task = new Task();
  console.log("-- calling Task#run(null) --");
  task.run(null);
  console.log("----------------");
  console.log("-- calling Task#run('test') --");
  task.run("test");

export default Person