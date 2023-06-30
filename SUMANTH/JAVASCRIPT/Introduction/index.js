// console.log("This is from external file")



// setTimeout(() => {
//     console.log(document.getElementById("fav_games"))
//     console.log(document.getElementById("popular_games"))
//     console.log(document.querySelector(".fav"))
//     console.log(document.querySelectorAll(".card"))
//     console.log(document.querySelectorAll(".fav"))
//     console.log(document.querySelector(".card"))
//     console.log(document.getElementsByClassName("popular_game"))
//     console.log(document.getElementsByTagName("section"))
//     document.title = "SPARTANS"
//     document.getElementsByClassName("popular_game")[1].style.backgroundColor = "red"
   


// }, 1000)
document.title = "SPARTANS"
var student1= "SUMANTH";
var age= 22;
var eligibilityforvoting= true;//true or false
var job = null;
console.log(student1+ " " +age+ " ELIGIBLITY:" + " "+ eligibilityforvoting)
console.log(job)

var a=10;
var b=6;
console.log(a + b)

function add() {
    var results = parseInt(document.getElementById("a").value) +
        parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;

}
function subtract() {
    var results = parseInt(document.getElementById("a").value) -
        parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;

}
function multiply() {
    var results = parseInt(document.getElementById("a").value) * 
    parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;

}
function divide() {
    var results = parseInt(document.getElementById("a").value) /
        parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;

}


// setTimeout(function () {
//     // document.getElementById("c1").innerHTML = "<div> " + student1 + "</div>";
//     document.getElementById("fav_games").style.backgroundColor = "red";
// }, 2000)

const college = {
    "name":"BMSCE",
    "area" : "BASAVANGUDI",
    "courses":["cs","ec","me","ee"]
}

function displaycollegedetails(){
    console.log(college)
}
displaycollegedetails();