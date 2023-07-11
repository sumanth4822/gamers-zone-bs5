let gamer = {
    game_mode: ["Competitive", "Unrated", "Swift play", "Death Match"],
    episode_and_act: ["E1:A1", "E1:A2", "E2:A1", "E2:A2"],
    name: "God Player",
    gamer_id: 1,
    profile_url: "some url",
    general: {
        wins: 318,
        losses: 150,
        win_percent: "67%",
        kills: 4850,
        death: 3512,
        headshot_percent: "25%"
    },
    rating: {
        actual_rank: {
            name: "Immortal 3",
            points: 75,
            rank_image_url: "url"
        },
        peak_rating: {
            name: "Radiante",
            episode_and_act: "E2:A2"
        }
    },
    most_played_agents: [
        {
            game_played: 208,
            agent_name: "Jett",
            win_rate: "58%",
            head_shot_percent: 28,
            img_url: "Url"
        },
        {
            game_played: 108,
            agent_name: "Raze",
            win_rate: "58%",
            head_shot_percent: 23,
            img_url: "Url"
        },
        {
            game_played: 608,
            agent_name: "Yoru",
            win_rate: "58%",
            head_shot_percent: 22,
            img_url: "Url"
        }, {
            game_played: 408,
            agent_name: "Fade",
            win_rate: "58%",
            head_shot_percent: 29,
            img_url: "Url"
        }
    ],
    monthly_win_rate: [],
    kills_per_weapon: {
        operator: 1530,
        phantom: 867
    }
}

//declaration
function print_game_mode(modes){
    for(let mode of modes){
console.log(mode)
    }
}
print_game_mode(gamer.game_mode)

//function expression

// const most_played_agents = function (agents_list){
//     for (let agent in agents_list){
//         console.log(agent.name + " |" + agane.head_shot_percent)
//     }
// }
// most_played_agents(agent.most_played_agents);

//using fat arrow
// const rating = (rating_type_list) => {
//     for(let rating_type in rating_type_list){
//         console.log(rating_type + " :" + rating_type_list[rating_type].name)
//     }
// } 
// rating(gamer.rating)