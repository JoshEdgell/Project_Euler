let pentAns = [];
let hexAns = [];
let trinum = 0;

const checkInteger = (n) => {
  if (Number.isInteger(n) === true) {
    return true;
  }
  else {
    return false;
  }
}

const pentVal = (n) => {
  let d = 1 + 24 * n;
  pentAns[0] = (1 + Math.sqrt(d)) / 6;
  pentAns[1] = (1 - Math.sqrt(d)) / 6;
  return pentAns;
}

const hexVal = (n) => {
  let d = 1 + 8 * n;
  hexAns[0] = (1 + Math.sqrt(d)) / 4;
  hexAns[1] = (1 - Math.sqrt(d)) / 4;
  return hexAns;
}

for (let i = 1; i < 100000; i++) {
  trinum = trinum + i;
  pentVal(trinum);
  hexVal(trinum);
  if (((checkInteger(pentAns[0]) === true && pentAns[0] > 0) || (checkInteger(pentAns[1]) === true && pentAns[1] > 0)) && ((checkInteger(hexAns[0]) && hexAns[0] > 0) === true || (checkInteger(hexAns[1]) === true && hexAns[1] > 0))) {
    console.log(trinum + " is also pentagonal and hexagonal.");
    console.log("It is triangular number " + i + ".");
    if (checkInteger(pentAns[0]) === true) {
      console.log("It is pentagonal number " + pentAns[0] + ".");
    }
    if (checkInteger(pentAns[1]) === true) {
      console.log("It is pentagonal number " + pentAns[1] + ".");
    }
    if (checkInteger(hexAns[0]) === true) {
      console.log("It is hexagonal number " + hexAns[0] + ".");
    }
    if (checkInteger(hexAns[1]) === true) {
      console.log("It is hexagonal number " + hexAns[1] + ".");
    }
  }
}
