function palindrome(str) {
	let revInd = str.length - 1;
	let s = [];
	let regex = /[a-z0-9]/;
	while (revInd >= 0) {
		if (str[revInd].charCodeAt(0) > 64 && str[revInd].charCodeAt(0) < 91) {
			s.push(String.fromCharCode(str[revInd].charCodeAt(0) + 32));
		} else if (str[revInd].match(regex)) {
	  		s.push(str[revInd]);
		}
		revInd--;
	}
	let i = 0;
	revInd = s.length - 1; 
	while (i < s.length) {
		if (s[i] != s[revInd]) {
			return false;
		}
		i++;
		revInd--;
	}
	return true;
}

console.log(palindrome("eye"));	// expected result: true
console.log(palindrome("_eye"));	// expected result: true
console.log(palindrome("race car"));	// expected result: true
console.log(palindrome("RaceCar"));	// expected result: true
console.log(palindrome("race CAR"));	// expected result: true
console.log(palindrome("A man, a plan, a canal. Panama"));	// expected result: true
console.log(palindrome("never odd or even"));	// expected result: true
console.log(palindrome("My age is 0, 0 si ega ym."));	// expected result: true
console.log(palindrome("0_0 (: /-\ :) 0-0"));	// expected result: true
console.log(palindrome("2A3*3a2"));	// expected result: true
console.log(palindrome("2A3 3a2"));	// expected result: true
console.log(palindrome("2_A3*3#A2"));	// expected result: true
console.log(palindrome("not a palindrome"));	// expected result: false
console.log(palindrome("nope"));	// expected result: false
console.log(palindrome("almostomla"));	// expected result: false
console.log(palindrome("1 eye for of 1 eye."));	// expected result: false
console.log(palindrome("five|\_/|four"));	// expected result: false