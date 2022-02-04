function largestOfFour(arr) {
  let i = 0;
  let largestNumArr = [];
  while (i < arr.length) {
    let j = 0;
    let count = arr[i][0];
    while (j < arr[i].length) {
      if (count < arr[i][j]) {
        count = arr[i][j];
      }
      j++;
    }
    largestNumArr.push(count);
    i++;
  }
  return largestNumArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));