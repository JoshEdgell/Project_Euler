let answer = Math.pow(2,1000);
let array = [];
let sum = 0;

while (answer > 0) {
  array.unshift(answer % 10);
  answer -= answer % 10;
  answer /= 10;
}

for (let i = 0; i < array.length; i++) {
  sum += array[i]
}

console.log(sum);
