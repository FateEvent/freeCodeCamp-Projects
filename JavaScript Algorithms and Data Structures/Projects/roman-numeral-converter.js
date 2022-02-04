function convertToRoman(num) {
	let i = 0;
	let unity = '';
	let tens = '';
	let hundreds = '';
	let thousands = '';
	let len = num.toString().length; 
	while (i < len) {
		if (num.toString()[len - 4]) {
			if (num.toString()[len - 4] == 0) {
				thousands = '';
			} else if (num.toString()[len - 4] == 1) {
				thousands = 'M';
			} else if (num.toString()[len - 4] == 2) {
				thousands = 'MM';
			} else if (num.toString()[len - 4] == 3) {
				thousands = 'MMM';
			} else if (num.toString()[len - 4] == 4) {
				thousands = 'MV̅';
			} else if (num.toString()[len - 4] == 5) {
				thousands = 'V̅';
			} else if (num.toString()[len - 4] == 6) {
				thousands = 'V̅M';
			} else if (num.toString()[len - 4] == 7) {
				thousands = 'V̅MM';
			} else if (num.toString()[len - 4] == 8) {
				thousands = 'V̅MMMM';
			} else if (num.toString()[len - 4] == 9) {
				thousands = 'MX̅';
			}
		}
		if (num.toString()[len - 3]) {
			if (num.toString()[len - 3] == 0) {
				hundreds = '';
			} else if (num.toString()[len - 3] == 1) {
				hundreds = 'C';
			} else if (num.toString()[len - 3] == 2) {
				hundreds = 'CC';
			} else if (num.toString()[len - 3] == 3) {
				hundreds = 'CCC';
			} else if (num.toString()[len - 3] == 4) {
				hundreds = 'CD';
			} else if (num.toString()[len - 3] == 5) {
				hundreds = 'D';
			} else if (num.toString()[len - 3] == 6) {
				hundreds = 'DC';
			} else if (num.toString()[len - 3] == 7) {
				hundreds = 'DCC';
			} else if (num.toString()[len - 3] == 8) {
				hundreds = 'DCCC';
			} else if (num.toString()[len - 3] == 9) {
				hundreds = 'CM';
			}
		}
		if (num.toString()[len - 2]) {
			if (num.toString()[len - 2] == 0) {
				tens = '';
			} else if (num.toString()[len - 2] == 1) {
				tens = 'X';
			} else if (num.toString()[len - 2] == 2) {
				tens = 'XX';
			} else if (num.toString()[len - 2] == 3) {
				tens = 'XXX';
			} else if (num.toString()[len - 2] == 4) {
				tens = 'XL';
			} else if (num.toString()[len - 2] == 5) {
				tens = 'L';
			} else if (num.toString()[len - 2] == 6) {
				tens = 'LX';
			} else if (num.toString()[len - 2] == 7) {
				tens = 'LXX';
			} else if (num.toString()[len - 2] == 8) {
				tens = 'LXXX';
			} else if (num.toString()[len - 2] == 9) {
				tens = 'XC';
			}
		}
		if (num.toString()[len - 1]) {
			if (num.toString()[len - 1] == 0) {
				unity = '';
			} else if (num.toString()[len - 1] == 1) {
				unity = 'I';
			} else if (num.toString()[len - 1] == 2) {
				unity = 'II';
			} else if (num.toString()[len - 1] == 3) {
				unity = 'III';
			} else if (num.toString()[len - 1] == 4) {
				unity = 'IV';
			} else if (num.toString()[len - 1] == 5) {
				unity = 'V';
			} else if (num.toString()[len - 1] == 6) {
				unity = 'VI';
			} else if (num.toString()[len - 1] == 7) {
				unity = 'VII';
			} else if (num.toString()[len - 1] == 8) {
				unity = 'VIII';
			} else if (num.toString()[len - 1] == 9) {
				unity = 'IX';
			}
		}
		i++;
	}
	return thousands + hundreds + tens + unity;
}

console.log(convertToRoman(4000));