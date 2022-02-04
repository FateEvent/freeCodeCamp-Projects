function chunkArrayInGroups(arr, size) {
  let i = 0;
  let newArr = [];
  while (i < arr.length) {
    let j = 0;
    let a = [];
    while (j < size && arr.length - i) {
      a.push(arr[i]);
      j++;
      i++;
    }
    newArr.push(a);
  }
  console.log(newArr);
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));