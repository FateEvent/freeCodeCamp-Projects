function rot13(str) {
	let i = 0;
	let array = [];
	while (i < str.length) {
		if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 77 || str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 109) {
			array.push(String.fromCharCode(str[i].charCodeAt(0) + 13));
		} else if (str[i].charCodeAt(0) >= 78 && str[i].charCodeAt(0) <= 90 || str[i].charCodeAt(0) >= 110 && str[i].charCodeAt(0) <= 122) {
			array.push(String.fromCharCode(str[i].charCodeAt(0) - 13));
		} else {
			array.push(str[i]);
		}
		i++;
	}
	return array.join('');
}
	
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));