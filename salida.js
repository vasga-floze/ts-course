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
    return User;
}());
var john = new User('John', 'john@gmail.com', 29);
console.log(john.AgeInYears());
document.write(john.name);
console.log(john.register());
