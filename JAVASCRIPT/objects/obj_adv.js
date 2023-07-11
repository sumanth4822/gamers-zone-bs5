// Constructor Function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log("Hello!");
//     };
// }

// const person2 = new Person("Rakesh", 22);

// person2.name;
// person2.greet()

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello, " + this.name + "!");
};

function Employee(name, salary) {
    Person.call(this,name);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const emp = new Employee("DIME", 10000);
emp.greet(); 
console.log(emp.salary) 