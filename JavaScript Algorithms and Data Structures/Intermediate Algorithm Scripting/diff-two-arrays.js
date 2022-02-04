function diffArray(arr1, arr2) {
	let arr = arr1.concat(arr2);
	return arr.filter(function(num) {
		return arr.indexOf(num) == arr.lastIndexOf(num);
	})
}

console.log(diffArray([1,2,3,4], [2,4]));
console.log(diffArray([1, 2, 3, 3, 5], [1, 2, 3, 4, 5]));
