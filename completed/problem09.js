const pythagorean = () => {
  for (let x = 1; x < 1000; x++) {
    for (let y = x + 1; y < 1000; y++) {
      if (2*y*y + 2 * x * y === 1000) {
        let a = y * y - x * x;
        let b = 2 * x * y;
        let c = y * y + x * x;
        let product = a * b * c;
        return product
      }
    }
  }
}

console.log(pythagorean());
