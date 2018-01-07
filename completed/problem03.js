const number = 600851475143;
let primes = [2];

const checkPrime = (input) => {
  for (let i = 0; i < primes.length; i++) {
    if (input % primes[i] === 0) {
      return false;
    }
  }
  return true;
}

const genPrimes = () => {
  for (let i = 3; i < Math.sqrt(number); i+= 2) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
}

const findLarge = () => {
  let largest = 0;
  for (let i = 0; i < primes.length; i++) {
    if (number % primes[i] ===0) {
      largest = primes[i];
    }
  }
  return largest
}

genPrimes();
console.log(findLarge());
