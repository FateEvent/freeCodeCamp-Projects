var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];

/*
Array.prototype.unique = function() {
	var a = this.concat();
	for(var i=0; i<a.length; ++i) {
		for(var j=i+1; j<a.length; ++j) {
			if(a[i] === a[j])
				a.splice(j--, 1);
		}
	}
	return a;
};

// Merges both arrays and gets unique items
var array3 = array1.concat(array2).unique();
console.log(array3);
*/

function unique(arr) {
	var a = [];
	for (var i = 0, l = arr.length; i < l; i++)
		if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
			a.push(arr[i]);
	return a;
}

var array3 = unique(array1.concat(array2));
console.log(array3);

/*
// To sort the array
Array.prototype.sortUnique = function() {
	this.sort();
	var last_i;
	for (var i=0;i<this.length;i++)
		if ((last_i = this.lastIndexOf(this[i])) !== i)
			this.splice(i+1, last_i-i);
	return this;
}

var array3 = array1.concat(array2).sortUnique();
console.log(array3);
*/

function sortUnique(arr) {
	arr.sort();
	var last_i;
	for (var i=0;i<arr.length;i++)
		if ((last_i = arr.lastIndexOf(arr[i])) !== i)
			arr.splice(i+1, last_i-i);
	return arr;
}

var array3 = sortUnique(array1.concat(array2));
console.log(array3);