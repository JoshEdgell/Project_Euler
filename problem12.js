//t is triagular number
//d is divisor
//n is number of fators
let numdiv = 0;
let trinum = 1;
let factors = 0;
for(i = 2; i <= 4; i++) {
  trinum = trinum + i;
  console.log("trinum = " + trinum);
  for (d = 1; d <=trinum; d++) {
    if (trinum % d === 0) {
      factors = factors + 1;
      console.log(d);
    }
    console.log("number of factors = " + factors);
    factors = 0;
  }
}
