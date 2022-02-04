function convertHTML(str) {
  let arr = [];
  let i = 0;
  while (i < str.length) {
    if (str[i].match(/[a-zA-Z ]/)) {
      arr.push(str[i]);
    } else if (str[i].match(/&/)){
      arr.push("&amp;");
    } else if (str[i].match(/</)){
      arr.push("&lt;");
    } else if (str[i].match(/>/)){
      arr.push("&gt;");
    } else if (str[i].match(/"/)){
      arr.push("&quot;");
    } else if (str[i].match(/'/)){
      arr.push("&apos;");
    }
    i++;
  }
  return arr.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));