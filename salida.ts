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

    payInvoice(){
        console.log(`${this.name} paid invoice`)
    }
}

var john = new User('John', 'john@gmail.com', 29);
//console.log(john.AgeInYears())
document.write(john.name);
//console.log(john.register());

///inheritance
class Member extends User{
    id: number;

    constructor(id, name, email, age){
        super(name, email, age) //llamada al constructor de la clase padre
        this.id=id
    }

    payInvoice() {
        super.payInvoice();
    }
}

var gordon = new Member(1, 'Gordon', 'gordon@gmail.com', 24);
gordon.payInvoice();