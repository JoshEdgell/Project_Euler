let maxProduct = 0;

const checkNumber = (number) => {
  let array = [];
  //Take the given number, put its digits into an array by using modulus and dividing the number until it equals 0
  while (number > 0) {
    array.unshift(number % 10);
    number -= number % 10;
    number = number / 10
  }
  //Stringify the array both forward and backward
  const forward = JSON.stringify(array);
  const reverse = JSON.stringify(array.reverse());
  //If the strings are equal, return true.  Otherwise, return false
  if (forward === reverse) {
    return true
  } else {
    return false
  }
}

//Iterate through three-digit numbers to get pairs of numbers to multiply
for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    product = i * j;
    //If the number is a palindrome...
    if (checkNumber(product)) {
      //And it's greater than the current maximum product...
      if (product > maxProduct) {
        //Make it the new max product!
        maxProduct = product;
      }
    }
  }
}

console.log(maxProduct);
