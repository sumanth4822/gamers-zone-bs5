let levels =[
    {level :0, name: "noobs"},
    {level :1, name: "beginners"},
    {level :2, name: "amateur"},
    {level :3, name: "intermediate"},
    {level :4, name: "expert"}
]

for (let level of levels){
    console.log(level)

   for(let temp in level){
    console.log(level[temp])
   }
}
