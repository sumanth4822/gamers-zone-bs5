let employee = { 
    name:"pradeep",
    dsg:"SE" ,
    salary:300000
 }
 switch(employee.dsg){
    case "SE":
    employee.salary *= 1.5;
    console.log("will get a hike equals to"+employee.salary)
    break;
    case "SSE":
        employee.salary *= 1.3;
        console.log("will get a hike equals to"+employee.salary)
    break;
    case "TL":
        employee.salary *= 1.25;
        console.log("will get a hike equals to"+employee.salary)
    break;
    case "CEO":
        employee.salary *= 1.05;
        console.log("will get a hike equals to"+employee.salary)
    break;
    default:console.log("no hike");
 }
    console.log(employee)