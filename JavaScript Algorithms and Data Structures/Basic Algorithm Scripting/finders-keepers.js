function findElement(arr, func) {
	let i = 0;
	let filtered = arr.filter(func);
	if (filtered) {
		return filtered[0];
	}
	return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));  // should return 2
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));  // should return 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));  // should return undefined