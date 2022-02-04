function telephoneCheck(str) {
	let i = 0;
	let regex = /^1\s\d{3}\s|^1?\d{10}$|^1?\s?\d{3}-\d{3}-\d{4}$|^1?\s?\(\d{3}\)\d{3}-\d{4}$|^1\s\(\d{3}\)\s\d{3}-\d{4}$/;
	return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));	//expected result: true
console.log(telephoneCheck("1 555-555-5555"));	//expected result: true
console.log(telephoneCheck("1 (555) 555-5555"));	//expected result: true
console.log(telephoneCheck("5555555555"));	//expected result: true
console.log(telephoneCheck("(555)555-5555"));	//expected result: true
console.log(telephoneCheck("1(555)555-5555"));	//expected result: true
console.log(telephoneCheck("1 555 555 5555"));	//expected result: true
console.log(telephoneCheck("1 456 789 4444"));	//expected result: true
console.log(telephoneCheck("555-5555"));	//expected result: false
console.log(telephoneCheck("5555555"));	//expected result: false
console.log(telephoneCheck("1 555)555-5555"));	//expected result: false
console.log(telephoneCheck("123**&!!asdf#"));	//expected result: false
console.log(telephoneCheck("55555555"));	//expected result: false
console.log(telephoneCheck("(6054756961)"));	//expected result: false
console.log(telephoneCheck("2 (757) 622-7382"));	//expected result: false
console.log(telephoneCheck("0 (757) 622-7382"));	//expected result: false
console.log(telephoneCheck("-1 (757) 622-7382"));	//expected result: false
console.log(telephoneCheck("2 757 622-7382"));	//expected result: false
console.log(telephoneCheck("10 (757) 622-7382"));	//expected result: false
console.log(telephoneCheck("27576227382"));	//expected result: false
console.log(telephoneCheck("(275)76227382"));	//expected result: false
console.log(telephoneCheck("2(757)6227382"));	//expected result: false
console.log(telephoneCheck("555)-555-5555"));	//expected result: false
console.log(telephoneCheck("(555-555-5555"));	//expected result: false
console.log(telephoneCheck("(555)5(55?)-5555"));	//expected result: false
console.log(telephoneCheck("55 55-55-555-5"));	//expected result: false