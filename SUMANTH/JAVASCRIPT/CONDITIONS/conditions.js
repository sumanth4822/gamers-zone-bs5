let user ={
    name:"Sumanth",
    age : 20,
    place : "bengaluru",
    Nationality : "indian",
    votingrights : "not eligible",
}

if(user.age>=18 && user.Nationality == "indian"){
user.votingrights = "ELigible";
}else{
    user.votingrights = "Not Eligible";
}
console.log(user)


let user_age = 17;
let ELigibility = user_age >=18? true:false
console.log("ELigibility:"+ELigibility)
