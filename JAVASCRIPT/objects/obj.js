const person = {
    name: "Rocky",
    age: 30,
    greet: function () {
        console.log("Hey Rocky");
    }
};
const gamersZone = {
    name: "Gamers Zone",
    location: "City X",
    games: ["Game A", "Game B", "Game C"],
    isOpen: true,
    showLocation: function () {
        console.log("Location: " + this.location);
    },
    showGames: function () {
        console.log("Games available:");
        for (let i = 0; i < this.games.length; i++) {
            console.log("- " + this.games[i]);
        }
    },
    toggleOpen: function () {
        // this.isOpen = !this.isOpen;
        console.log("Zone is now " + (this.isOpen ? "open" : "closed") + ".");
    }
};

console.log(gamersZone.name);        // Gamers Zone
gamersZone.showLocation();           // Location: City X
gamersZone.showGames();
// Games available:
// - Game A
// - Game B
// - Game C
gamersZone.toggleOpen();             // Zone is now closed.

const keys = Object.keys(gamersZone);
console.log(keys);  // ["name", "location", "games", "isOpen", "showLocation", "showGames", "toggleOpen"]

const values = Object.values(gamersZone);
console.log(values);
// ["Gamers Zone", "City X", ["Game A", "Game B", "Game C"], true, ƒ, ƒ, ƒ]

const entries = Object.entries(gamersZone);
console.log(entries);
// [["name", "Gamers Zone"], ["location", "City X"], ["games", ["Game A", "Game B", "Game C"]],
//  ["isOpen", true], ["showLocation", ƒ], ["showGames", ƒ], ["toggleOpen", ƒ]]