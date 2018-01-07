const number = 1000000000

const checker = (input) => {
  for (let i = 2; i < 21; i++) {
    if (input % i !== 0) {
      return false;
    }
  }
  return true;
}

const smallMultiple = () => {
  for (let i = 1; i < number; i++) {
    if (checker(i)) {
      return i
    }
  }
}

console.log(smallMultiple());
