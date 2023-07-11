

let employees=[
    {
    
        name:"Rakshith",
        employee_id:1,
        reporters:[2,3,4,5,6],
        designation:"Manager",
        salary:200000,
        experience:15
    },
    {
        name:"Sumanth",
        employee_id:2,
        reporters:[3,4,5,6],
        designation:"Team lead",
        salary:100000,
        experience:10
    },
    {
        name:"vikas",
        employee_id:3,
        reporters:[4,5,6],
        designation:"SSE",
        salary:70000,
        experience:5
    },
    {
        name:"manoj",
        employee_id:4,
        reporters:[],
        designation:"SE",
        salary:50000,
        experience:5
    },
    {
        name:"mitch",
    employee_id:5,
    reporters:[],
    designation:"SE",
    salary:50000,
    experience:5
    },
    {
    name:"randy",
    employee_id:6,
    reporters:[],
    designation:"SE",
    salary:50000,
    experience:5
    }
]

// for(let i=0;i<employees.length;i++){
//     console.log( "NAME:" +employees[i].name)
// }
    for(let index of employees){
        console.log("name:" + index.name + "|" + "id:" + index.employee_id + "|" + "reporters:" + index.reporters)
    }


// let fruits = ["apple","mango","grape","banana"];
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }
