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

console.log(gamersZone.name);        
gamersZone.showLocation();           

gamersZone.toggleOpen();            

const keys = Object.keys(gamersZone);
console.log(keys); 

const values = Object.values(gamersZone);
console.log(values);


const entries = Object.entries(gamersZone);
console.log(entries);
