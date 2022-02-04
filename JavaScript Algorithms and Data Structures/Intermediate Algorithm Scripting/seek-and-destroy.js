function destroyer(arr) {
  let i = 1;
  let newArk = [];
  while (i < arguments.length) {
    newArk.push(arguments[i]);
    i++;
  }
  return arr.filter(item => !newArk.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));