let sum = 2;

for (let i = 2; i < 1001; i++) {
  if (i % 2 ===0) {
    sum += (i * i + 1);
  } else {
    sum += (3 * i * i);
  }
}

sum += (1001 * 1001);
sum += (1001 * 1001);

console.log(sum)
