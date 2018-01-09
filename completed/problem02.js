//Start with the first two (given) fibonacci numbers (former math teacher's note - the Fibonacci sequence starts with '1,1,2,...' and this drives me nuts about this problem on Project Euler)
let fibonaccis = [1,2]

const fiboGen = () => {
  //Iterate up to 1,000,000, which just seemed like a nice, round number to be sure we'd hit all the fibonacci numbers less than 4,000,000
  for (let i = 0; i < 1000000; i++) {
    //If the last term in the array of fibonacci numbers is less than 4,000,000
    if(fibonaccis[fibonaccis.length - 1] < 4000000) {
      //Add the ith and ith-plus-one term to the end of the fibonacci array
      fibonaccis.push(fibonaccis[i] + fibonaccis[i+1]);
    } else {
      //If the last number in the fibonacci array is greater than 4,000,000, get rid of it and end the fibonacci generation
      fibonaccis.pop();
      return
    }
  }
}

const evener = () => {
  let sum = 0;
  //Starting at index 1, iterate through every third fibonacci number (the pattern goes even-odd-odd throughout), and add that number to the sum of the even fibonacci numbers
  for (let i = 1; i < fibonaccis.length; i+=3) {
      sum += fibonaccis[i]
  }
  return sum
}

fiboGen();
console.log(evener());
