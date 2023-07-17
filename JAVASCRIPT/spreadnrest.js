//spread is expanding operator

let arr1 = [`one`,`two`]

let arr2 = [...arr1,`three`,`four`,`five`]

console.log(arr2)


//rest is combining operator

let {x,y, ...z} = {x:1,x:2,a:5,b:4}
x;//{1}
y;//{2}
z;// {5,4}