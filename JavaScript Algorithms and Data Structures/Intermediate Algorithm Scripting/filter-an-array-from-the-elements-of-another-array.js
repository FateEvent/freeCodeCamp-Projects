/*
function filteredArr(arr1, arr2) {
	return arr1.filter(item => !arr2.includes(item));
}
*/

function filteredArr(arr1, arr2) {
	return arr1.filter(
		function(e) {
			return this.indexOf(e) < 0;
		},
		arr2
	);
}

console.log(filteredArr([1,2,3,4], [2,4]));
console.log(filteredArr([1, 2, 3, 3, 5], [1, 2, 3, 4, 5]));