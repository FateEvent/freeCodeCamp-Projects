function pairElement(str) {
  let i = 0;
  let arr = [];
  while (i < str.length) {
    if (str[i] == 'A') arr.push([str[i], 'T']);
    else if (str[i] == 'T') arr.push([str[i], 'A']);
    else if (str[i] == 'G') arr.push([str[i], 'C']);
    else if (str[i] == 'C') arr.push([str[i], 'G']);
    i++;
  }
  return arr;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CGC"));
console.log(pairElement("CTCTA"));