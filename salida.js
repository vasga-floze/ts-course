var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function showTodo(todo) {
    //console.log(`${todo.title} - ${todo.text}`);
}
showTodo({
    title: "Buy groceries",
    text: "Must buy apples and bananas"
});
var myTodo = { title: "prueba", text: "bachata" };
//clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered!"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return "The user is ".concat(this.age, " years old");
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " paid invoice"));
    };
    return User;
}());
var john = new User('John', 'john@gmail.com', 29);
//console.log(john.AgeInYears())
document.write(john.name);
//console.log(john.register());
///inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this; //llamada al constructor de la clase padre
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, 'Gordon', 'gordon@gmail.com', 24);
gordon.payInvoice();
