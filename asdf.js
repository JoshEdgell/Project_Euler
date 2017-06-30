let primes = [2];
let num = 0;

const printPrimes = (num) => {
  for (let i = 2; i <= num; i++) {
    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] != 0 && i != primes[j]) {
        primes.push(i);
      }
    }
    return primes;
}

console.log(checkPrime(23));
