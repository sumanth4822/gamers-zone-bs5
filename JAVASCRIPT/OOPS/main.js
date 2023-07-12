// File: main.js
const Company = require('./Company');
const Employee = require('./employee');

const company = new Company('Excelr', 'BTM LAYOUT');
company.greet(); // Output: Hello Jay

// Creating a new instance of Student
const employee = new Employee('Amit', 20, '200000');

console.log('Welcome ' + employee.name) // Output: Hello Amit
employee.work(); // Output: Amit is studying at VTU University.