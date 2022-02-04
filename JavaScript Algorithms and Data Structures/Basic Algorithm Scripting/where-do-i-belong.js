function compareNumbers(a, b) {
	return a - b;
}

function getIndexToIns(arr, num) {
	arr.sort(compareNumbers);
	let i = 0;
	if (arr == []) return 0;
	while (i < arr.length) {
		if (arr[i] >= num) {
			return i;
		}
		i++;
	}
	return i;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));