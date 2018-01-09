let max = 0;

//Starting at 2 and counting to 1,000,000...
for (i = 2; i < 1000000; i++) {
  let value = i;
  let length = 1;
  //while the value is not equal to 1
  while (value != 1) {
    //If it's even, divide it by 2 (and increment the length)
    if (value % 2 === 0) {
      value = value / 2;
      length += 1;
    }
    //Otherwise, multiply by 3 and add 1 (and increment the length)
    else {
      value = 3 * value + 1;
      length += 1;
    }
  }
  //If the length of the chain is longer than the previous max, update the max.
  if (length > max) {
    max = length;
    maxer = i;
  }
}
console.log("max length = " + max);
console.log("maxer = " + maxer);
