const number = 600851475143;
let primes = [2];

const checkPrime = (input) => {
  //Iterate through the array of prime numbers
  for (let i = 0; i < primes.length; i++) {
    //If the input value is divisible by any value in the primes array, return false since the number isn't prime
    if (input % primes[i] === 0) {
      return false;
    }
  }
  //Return true if the number is prime
  return true;
}

const genPrimes = () => {
  //Starting at 3 and iterating through the odd numbers up to the squre root of the given number,
  for (let i = 3; i <= Math.sqrt(number); i+= 2) {
    //If the number passes the checkPrime function, add it to the prime array
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
}

const findLarge = () => {
  let largest = 0;
  //Iterate through the primes array
  for (let i = 0; i < primes.length; i++) {
    //If a number in the array divides the number evenly
    if (number % primes[i] ===0) {
      //Replace the largest factor with the prime number that divides evenly
      largest = primes[i];
    }
  }
  return largest
}

genPrimes();
console.log(findLarge());
