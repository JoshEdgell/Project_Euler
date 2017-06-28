let max = 0;

for (i = 2; i < 999999; i++) {
  let s = i;
  let l = 1;
  while (s != 1) {
    if (s % 2 === 0) {
      s = s / 2;
      l = l + 1;
    }
    else {
      s = 3 * s + 1;
      l = l + 1;
    }
  }
  if (l > max) {
    max = l;
    maxer = i;
  }
}
console.log("max length = " + max);
console.log("maxer = " + maxer);
