let fibonaccis = [1,2]

const fiboGen = () => {
  for (let i = 0; i < 1000000; i++) {
    if(fibonaccis[fibonaccis.length - 1] < 4000000) {
      fibonaccis.push(fibonaccis[i] + fibonaccis[i+1]);
    } else {
      fibonaccis.pop();
      return
    }
  }
}

const evener = () => {
  let sum = 0;
  for (let i = 0; i < fibonaccis.length; i++) {
    if (fibonaccis[i] % 2 === 0) {
      sum += fibonaccis[i]
    }
  }
  return sum
}

fiboGen();
console.log(evener());
