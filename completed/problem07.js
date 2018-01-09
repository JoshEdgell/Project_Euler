//Most of this is code I readapted from problem 3...

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
  //Starting at 3 and iterating through the odd numbers up to 200,000...
  for (let i = 3; i <= 200000; i+= 2) {
    //If the number passes the checkPrime function, add it to the prime array
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
}

while (primes.length < 10002) {
  genPrimes();
}

console.log(primes[10000])
