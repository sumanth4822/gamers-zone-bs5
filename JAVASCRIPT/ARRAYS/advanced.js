// let employee = [
//     {name:"qwerty",salary:120000},
//     {name:"poiuy",salary:150000},
//     {name:"zxcvb",salary:20000}
// ]

// let hike = employee.map(function (employee){
//     employee.salary += employee.salary * 0.1;
// return employee

// });
// console.log(hike)

//using map to double each number

let numbers = [1,2,3,4,5]
// let doublednumbers = numbers.map(function(number){
//     return number * 2;
// });
// console.log(doublednumbers);


//using filter to get even numbers

let evennumbers = numbers.filter(function(number){
    return numbers % 2 === 0;
});
console.log(evennumbers);