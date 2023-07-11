// IIFE 
//(function(a,b,c){
//     console.log(a+b+c)
// })(2,4,5);

//IIFE-2
// (function add(a,b,c){
//     console.log(a+b+c)
// })(2,5,6);


var games = ["cricket","kabaddi","football"];


(function(arr,game_arr){
    var player={
        name: "Michael Jordan",
        age:50,
        matches_played: function(temp_arr){
            console.log(player.name + "| NUMBER OF GAMES PLAYED:" + temp_arr)
           
        },
        new_games: function(temp_games){
            console.log(player.name + "| did not play these games"+ "[" + temp_games + "]")
        }
        
    };
    player.matches_played(arr);
    player.new_games(game_arr);
})(["M1","M2","M3"],games);
