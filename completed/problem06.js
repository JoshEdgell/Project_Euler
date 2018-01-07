let sumOfSquares = 0;
let squareOfSums = 0;

for (let i = 0; i < 101; i++) {
  sumOfSquares += i*i;
  squareOfSums += i;
}

squareOfSums = squareOfSums * squareOfSums;

let difference = squareOfSums - sumOfSquares;

console.log(difference);
