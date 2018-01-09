//I saw an opportunity to change this problem a bit.  Rather than leave it at only being able to find the smallest number that is evenly divisible by all of the numbers from 1 - 20, why not make it capable of finding the smallest number evenly divisible by all of the numbers from 1 - n, based on user input?

const factorial = 1;

//This function finds the factorial (!) of a number
const findFactorial = (input) => {
  product = input;
  while (input > 0) {
    product *= input;
    input -= 1;
  }
  return product
}

const checker = (input, number) => {
  //Iterate through the numbers from 2-20
  for (let i = 2; i < number + 1; i++) {
    //If the number isn't divisible by one of the numbers, return false
    if (input % i !== 0) {
      return false;
    }
  }
  return true;
}

//The user inputs the number they'd like to find the factors up to (in the case of the given problem, 20)
const smallMultiple = (number) => {
  //The maximum possible value is the factorial of whatever number we're trying to find factors up to
  const max = findFactorial(number);
  for (let i = 1; i < max; i++) {
    //Run the checker function on each number.  If the checker returns true, that's our smallest multiple!
    if (checker(i, number)) {
      return i
    }
  }
}

console.log(smallMultiple(20));
