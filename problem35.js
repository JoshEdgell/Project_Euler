let primes = [2];

for (let i = 3; i < 1000000; i+=2) {
  let isPrime = true;
  for (let j = 0; j < primes.length; j++) {
    if (i % primes[j] === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}
console.log(primes.length, 'number of primes');
