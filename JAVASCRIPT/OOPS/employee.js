const Company = require('./Company');

class Employee extends Company {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    work() {
        console.log(this.name + ' is a Employee with ' + this.salary + ' salary.');
    }
}


module.exports = Employee;