function confirmEnding(str, target) {
  if (str.lastIndexOf(target) == str.length - target.length) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("Open sesame", "same"));