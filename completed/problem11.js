const grid = [[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08], [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00], [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65,], [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91], [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80], [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50], [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70], [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21], [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72], [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95], [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92], [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57], [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58], [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40], [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66], [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69], [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36], [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16], [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54], [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]]


//After solving this problem, I modified each of the functions in order to find products of numbers of adjacent temrs other than just four in a row.
const checkHorizontal = (array, value) => {
  num = value - 1
  //Define a horizontal maximum to be returned from the function
  let maxHorizontal = 0;
  //Cycle through each array of the larger array
  for (let i = 0; i < array.length; i++) {
    //Cycle through each element of the selected array
    for (let j = 0; j < array[i].length - num; j++) {
      //Define a temporary product to check against the maximum
      let product = 1;
      //Make sure to take the four consecutive values of the smaller array; multiply the four values
      for (let k = j; k < j + value; k++) {
        product *= array[i][k]
      }
      //Check the temporary product against the horizontal maximum;
      if (product > maxHorizontal) {
        maxHorizontal = product;
      }
    }
  }
  return maxHorizontal
}

const checkVertical = (array, value) => {
  num = value - 1;
  //Define a vertical maximum to be returned from the function
  let maxVertical = 0;
  //Cycle through each array in the larger array
  for (let i = 0; i < array.length - num; i++) {
    //Cycle through each element of the smaller array
    for (let j = 0; j < array[i].length; j++) {
      //Set a temporary product to check against the vertical maximum
      let product = 1;
      //Get the four jth elements starting with the ith array in the list
      for (let k = i; k < i + value; k++) {
        product *= array[k][j]
      }
      //Check the temporary product against the vertical maximum; replace if necessary
      if (product > maxVertical) {
        maxVertical = product;
      }
    }
  }
  return maxVertical;
}

const checkPrimeDiagonal = (array, value) => {
  num = value - 1
  //Set a max diagonal variable to return from the function
  let maxDiagonal = 0;
  //Cycle through the array of arrays, stopping at the fourth index from the end
  for (let i = 0; i < array.length - num; i++) {
    //Cycle through each element in the selected array, stopping at the fourth index from the end
    for (let j = 0; j < array[i].length - num; j++) {
      //Define a temporary product to check against maxDiagonal
      let product = 1;
      //Loop through the four values and multiply them by the product
      for (let k = 0; k < value; k++) {
          product *= array[i + k][j + k];
      }
      //Check to see if the product is larger than the current max
      if (product > maxDiagonal) {
        maxDiagonal = product;
      }
    }
  }
  return maxDiagonal
}

const checkBackDiagonal = (array, value) => {
  num = value - 1
  //Set a max diagonal variable to return from the function
  let maxDiagonal = 0;
  //Cycle through the array of arrays
  for (let i = 0; i < array.length - num; i++) {
    //Cycle through each element in the selected array, stopping at the fourth index from the end
    for (let j = num; j < array.length; j++) {
      //Define a temporary product to check against maxDiagonal
      let product = 1;
      //Loop through the four values and multiply them by the product
      for (let k = 0; k < value; k++) {
          product *= array[i + k][j - k];
      }
      //Check to see if the product is larger than the current max
      if (product > maxDiagonal) {
        maxDiagonal = product;
      }
    }
  }
  return maxDiagonal
}

//The first input of the findMax function is the array to check for a maximum value.  The second input is the number of adjacent terms for which a user would like to find a product.  For instance, to find the greatest product of 7 adjacent terms, the user would run findMax(array,7) to get a value of 13927577940540.
const findMax = (array, value) => {
  let maxes = [checkHorizontal(array, value), checkVertical(array, value), checkPrimeDiagonal(array, value), checkBackDiagonal(array, value)]
  maxes = maxes.sort(function(x,y){return x-y});
  return maxes[3]
}

console.log(findMax(grid, 5));
