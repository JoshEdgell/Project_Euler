let trinum = [1];
let triAdder = 2;
let maxFactors = 1;

//This function will add the next triangular number to the array of triangular numbers
const genTriangular = () => {
  //Add the next "layer" of triangular number to the last number pushed into the triangular numbers array
  trinum.push(trinum[trinum.length - 1] + triAdder);
  //Iterate the triangular adder ("layer") for the next number to be added.
  triAdder += 1;
}

const checkFactors = (number) => {
  //Create an array of 2 factors of the given number - 1 and the number itself
  let factors = [1];
  factors.push(number);
  //Loop through all numbers from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    //If the number is divisible by i, push it into the array
    if (number % i === 0) {
      factors.push(i);
      //To make sure the square root isn't counted twice (as in the case of 36), only push the value of i into the factors array
      if (i != number / i) {
        factors.push(number / i);
      }
    }
  }
  //Return the number of factors in the array
  return factors.length
}

//While the greatest number of factors of all found triangular numbers is less than 500...
while (checkFactors(trinum[trinum.length - 1]) < 500) {
  //Put another triangular number in to the array of triangular numbers
  genTriangular();
  //
  checkFactors(trinum[trinum.length - 1])
}

console.log(trinum[trinum.length - 1])
console.log(triAdder);
