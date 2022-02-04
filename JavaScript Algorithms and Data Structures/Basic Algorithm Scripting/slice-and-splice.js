function frankenSplice(arr1, arr2, n) {
	let index = 0;
	let i = 0;
	let j = 0;
	let arr = [];
	while (i < n) {
		arr[index] = arr2[i];
		index++;
		i++;
	}
	while (j < arr1.length) {
		arr[index] = arr1[j];
		index++;
		j++;
	}
	while (i < arr2.length) {
		arr[index] = arr2[i];
		index++;
		i++;
	}
	return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));