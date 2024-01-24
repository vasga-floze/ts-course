//Interfaces
interface ITodo {
    title: string;
    text: string;
}

function showTodo(todo: ITodo) {
    //console.log(`${todo.title} - ${todo.text}`);
}

showTodo({
    title: "Buy groceries",
    text: "Must buy apples and bananas"
})

let myTodo: ITodo = {title: "prueba", text: "bachata"}

//clases
class User {
    name: string;
    public email: string;
    protected age: number; 

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} is registered!`)
    }

    showMeAge(){
        return this.age;
    }

    public AgeInYears(){
        return `The user is ${this.age} years old`;
    }
}

var john = new User('John', 'john@gmail.com', 29);
console.log(john.AgeInYears())
document.write(john.name);
console.log(john.register());