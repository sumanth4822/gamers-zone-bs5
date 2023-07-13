// Check minimum length
let username = "DIME @";


if (username.length < 6) {
    console.log("Username must be at least 6 characters long.");
}
// Check if username contains special characters
if (username.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    console.log("Username cannot contain special characters.");
}


// Check uniqueness
// let Unique = checkUsernameUniqueness(username); // Write a method to check
// if (!Unique) {
//     console.log("Username is already taken.");
// }


let games = ["Assassin's Creed", "Call of Duty", "The Legend of Zelda", "Final Fantasy"];

let searchQuery = "FINAL";

let searchResults = games.filter(game => game.toUpperCase().includes(searchQuery.toUpperCase()));

console.log(searchResults);

//chat filtering
let message = 'Hey, this game is bad! Very awful!';

let bannedWords = ['bad', 'awful'];

let isClean = !bannedWords.some(word => message.toLowerCase().includes(word));

if (isClean) {
    console.log('Message is clean and can be sent.');
} else {
    console.log('Message contains banned words and cannot be sent.');
}

//formatting
let score = 12345667;
let formattedScore = score.toLocaleString();

console.log(`Your score: ${formattedScore}`);
