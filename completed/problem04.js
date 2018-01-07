for (let i = 100; i < 1000; i++) {
  for(let j = 100; j < 1000; j++) {
    let p = i * j;
    let prod = [];
    let rev = [];
    let k = 0;
    let max = 0;
    let f = 0;
    while (p > 0) {
      prod.push(p % 10);
      p = (p - prod[k]) / 10;
      k++;
    }
    for (let k = 0; k < prod.length; k++) {
      rev.unshift(prod[k]);
    }
    let prodstring = JSON.stringify(prod);
    let revstring = JSON.stringify(rev);
    if (prodstring === revstring) {
      f = i * j;
      if (f > max) {
        max = f;
      console.log(i + " and " + j + " multiply to get the largest yet palindrome of " + max);
    }
    }
  }
}
