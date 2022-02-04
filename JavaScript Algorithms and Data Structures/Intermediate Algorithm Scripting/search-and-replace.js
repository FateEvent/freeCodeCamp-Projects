function myReplace(str, before, after) {
	let arr = [];
	let split = str.split(' ');
	let index = split.indexOf(before);
	let i = 1;
	let s = [];
	if (str.includes(before) && split[index][0].charCodeAt(0) >= 97 && split[index][0].charCodeAt(0) <= 122) {

		if (after[0].charCodeAt(0) >= 65 && after[0].charCodeAt(0) <= 90) {
			s.push(String.fromCharCode(after[0].charCodeAt(0) + 32));

			while (i < after.length) {
				s.push(after[i]);
				i++;
			}

			split.splice(index, 1, s.join(''));
			return split.join(' ');

		} else {
			split.splice(index, 1, after);
			return split.join(' ');
		}
	
	} else if (str.includes(before) && split[index][0].charCodeAt(0) >= 65 && split[index][0].charCodeAt(0) <= 90) {
		
		if (after[0].charCodeAt(0) >= 97 && after[0].charCodeAt(0) <= 122) {
			s.push(String.fromCharCode(after[0].charCodeAt(0) - 32));

			while (i < after.length) {
				s.push(after[i]);
				i++;
			}

			split.splice(index, 1, s.join(''));
			return split.join(' ');
		} else {
			split.splice(index, 1, after);
			return split.join(' ');
		}
	}
	return -1;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
console.log(myReplace("a LaZY dog", "LaZY", "crazy"));
console.log(myReplace("a crazy dog", "crazy", "Woopsie"));