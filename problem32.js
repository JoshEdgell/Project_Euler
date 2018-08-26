function arrayify(number) {
  let array = [];
  while (number > 0) {
    array.unshift(number % 10);
    number -= number % 10;
    number /= 10;
  }
  return array;
}

function isPandigital(mult1, mult2, product){
  let array = arrayify(mult1);
  let arr1 = arrayify(mult2);
  let arr2 = arrayify(product);
  array = array.concat(arr1,arr2);
  array.sort(function(a,b){return a - b})
  for (let i = 1; i < 10; i++) {
    if (array[i - 1] != i) {
      return false;
    }
  }
  return true;
}

let num1 = 39;
let num2 = 186;
let prod = 7254;

console.log(isPandigital(num1,num2,prod));
