const pythagorean = () => {
  //Euclid's formula generates pythagorean triples in the form of (a = x^2 - y^2, b = 2xy, and c = x^2 + y^2)
  for (let x = 1; x < 1000; x++) {
    for (let y = x + 1; y < 1000; y++) {
      //If a, b, and c (simplified) add up to 1000...
      if (2*y*y + 2 * x * y === 1000) {
        //Calculate the values of a, b, and c based on Euclid's formula and return the product
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
