function truthOrDare(val) {
  if (val) return true;
  return false;
}

function bouncer(arr) {
  let truthy = arr.filter(truthOrDare);
  return truthy;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));