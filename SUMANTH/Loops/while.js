let i = 1;
while(i <= 100){
    
    console.log(i * 10);
    i++;
}

let input = 0;
while (input != 10){
    input = prompt("Enter a number")
}

let n = 5;
let product = 1;
do{
    product *=n;
    n -= 1;
}while(n >= 1);
console.log(product);
