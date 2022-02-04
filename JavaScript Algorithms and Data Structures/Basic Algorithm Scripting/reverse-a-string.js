function reverseString(str) {
	let revInd = str.length - 1;
	let s = [];
	while (revInd >= 0) {
		s.push(str[revInd]);
		revInd--;
	}
	return s.join('');
}

reverseString("hello");