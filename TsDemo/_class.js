var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.log = function () {
        console.log(this.name); // 类的内部访问
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        return _super.call(this, name) || this;
    }
    Man.prototype.say = function () {
        console.log(this.name); // 子类
    };
    return Man;
}(Person));
var person = new Person('lili');
var man = new Man('xx');
person.name; // 实例 protected 实例不能访问
man.name; // 实例  protected 实例不能访问
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    MyMath.getPerimeter = function (r) {
        return 2 * r * this.PI; //  2*R*MyMath.PI 也可以
    };
    MyMath.PI = 3.1415926;
    return MyMath;
}());
var myMath = new MyMath();
// myMath.PI // 错误
MyMath.PI; // 正确
