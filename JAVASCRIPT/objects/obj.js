// const person = {
//     name: "DIME",
//     age: 23,
//     greet: function () {
//         console.log("WELCOME TO GAMING");
//     }
// };
// const gamersZone = {
//     name: "Gamers Zone",
//     location: "INDIA",
//     games: ["FORTNITE", "COD", "VALORANT"],
//     isOpen: true,
//     showLocation: function () {
//         console.log("Location: " + this.location);
//     },
//     showGames: function () {
//         console.log("Games available:");
//         for (let i = 0; i < this.games.length; i++) {
//             console.log("- " + this.games[i]);
//         }
//     },
//     toggleOpen: function () {
//         // this.isOpen = !this.isOpen;
//         console.log("Zone is now " + (this.isOpen ? "open" : "closed") + ".");
//     }
// };

// console.log(person.name)
// console.log(gamersZone.name);        
// gamersZone.showLocation();           

// gamersZone.toggleOpen();            

// const keys = Object.keys(gamersZone);
// console.log(keys); 

// const values = Object.values(gamersZone);
// console.log(values);


// const entries = Object.entries(gamersZone);
// console.log(entries);

// Object.freeze(gamersZone);
// gamersZone.name = "New Name";
// console.log(gamersZone.name); 



//constructor
function person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("WELCOME");
    };
}

const person2 = new person("Rakesh", 22);

person2.name;
person2.greet()