function check_doubles(str, c, pos)
{
	let i = 0;
	while (i < pos) {
		if (str[i] == c) return (0);
		i++;
	}
	return (1);
}

function mutation(arr) {
	let i = 0;
	let counter = 0;
	while (i < arr[0].length) {
		let j = 0;
		while (j < arr[1].length) {
	  		if (check_doubles(arr[0], arr[1][j], i)) {
				if (arr[0][i] == arr[1][j] || arr[0][i].charCodeAt(0) == (arr[1][j].charCodeAt(0) + 32) || arr[0][i].charCodeAt(0) == (arr[1][j].charCodeAt(0) - 32)) {
					counter++;
				}
			}
			j++;
		}
		i++;
	}
	if (arr[1].length == counter) return true;
	return false;
}

console.log(mutation(["hello", "hey"]));	// should return false
console.log(mutation(["hello", "Hello"]));	// should return true
console.log(mutation(["Mary", "Army"]));	// should return true
console.log(mutation(["voodoo", "no"]));  // should return false
console.log(mutation(["Mary", "Aarmy"])); // should return true
console.log(mutation(["floor", "for"]));  // should return true