let sum = 0;

//Iterate through all numbers less than 1000
for (let i = 0; i < 1000; i++) {
  //If a number is divisible by both 3 and 5, add it to the existing sum
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
  //If a number is divisible by 3, but not by 5, add it to the existing sum
  if (i % 3 === 0 && i % 5 !== 0) {
    sum += i
  }
  //If a number is divisible by 5, but not by 3, add it to the existing sum
  if (i % 3 !== 0 && i % 5 === 0) {
    sum += i;
  }
}

console.log(sum)
