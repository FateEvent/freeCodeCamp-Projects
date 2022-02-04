const diff = function (a, b) {
  if (a >= b) return a - b;
  else return b - a;
}

const greater = function(a, b) {
  return a > b ? a : b;
}

function sumAll(arr) {
  let i = 0;
  let sum = 0;
  let end = greater(arr[0], arr[1]);
  while (i < diff(arr[0], arr[1]) + 1) {
    sum += end;
    i++;
    end--;
  }
  return sum;
}

console.log(sumAll([1, 4]));