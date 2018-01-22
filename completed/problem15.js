let numeratorArray = [];
let denominatorArray = [];

for (let i = 1; i <= 40; i++) {
  numeratorArray.push(i);
}

for (let i = 1; i <= 20; i++) {
  denominatorArray.push(i);
  denominatorArray.push(i);
}

for (let i = 0; i < numeratorArray.length; i++) {
  for (let j = 0; j < denominatorArray.length; j++) {
    if (numeratorArray[i] === denominatorArray[j]) {
      numeratorArray.splice(i,1);
      denominatorArray.splice(j,1);
    }
  }
}

let numProduct = 1;
let denomProduct = 1;

for (let i = 0; i < numeratorArray.length; i++) {
  numProduct *= numeratorArray[i]
}

for (let i = 0; i < denominatorArray.length; i++) {
  denomProduct *= denominatorArray[i]
}

let quotient = numProduct / denomProduct

console.log(quotient)
