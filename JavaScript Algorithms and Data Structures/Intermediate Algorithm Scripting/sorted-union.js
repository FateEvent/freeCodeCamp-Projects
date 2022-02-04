function unique(arr) {
	var a = [];
	for (var i = 0, l = arr.length; i < l; i++)
		if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
			a.push(arr[i]);
	return a;
}

function uniteUnique(arr) {
  let i = 2;
  let newArk = arr.concat(arguments[1]);
  while (i < arguments.length) {
    newArk = newArk.concat(arguments[i]);
    i += 1;
  }
  return unique(newArk);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));