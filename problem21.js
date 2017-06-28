let divtot1 = 0;
let divtot2 = 0;
let amisum = 0;

for (a = 2; a < 10000; a++) {
for (i = 1; i < a; i++) {
  if (a % i == 0) {
    divtot1 = divtot1 + i;
  }
}
for (j = 1; j < divtot1; j++) {
  if (divtot1 % j == 0) {
    divtot2 = divtot2 + j;
  }
}
if (divtot2 == a && a != divtot1) {
  console.log("amicable pair: " + divtot1 + " and " + divtot2);
  amisum = amisum + divtot2 + divtot1;
}
divtot1 = 0;
divtot2 = 0;
}
amisum = amisum / 2;
console.log(amisum);
