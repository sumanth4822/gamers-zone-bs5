for (let i = 0; i < 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// Multiple of 10 until 200
let inp = 1;
for (inp = 1; inp <= 200; inp++) {
  if (inp % 10 == 0) {
    console.log(inp);
  }
}

// print all even number unto 50
let i = 1;
for (i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Addition of number until 20
let i = 0;
let sum = 0;
for (i = 0; i <= 50; i++) {
  sum += i;
}
console.log("The Addition of upto number 50 is " + sum);

// Factorial of n numbers
let n = 5;
let fact = 1;
for (n = 5; n >= 1; n--) {
  fact *= n;
}
console.log(fact);
