function cleanArr(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == '') {
				arr.splice(i, 1);
			}
		}
	}
}

function spinalCase(str) {
  let i = 0;
	let split = str.split(/[^a-zA-Z0-9]|(?=[A-Z])/g);
	cleanArr(split);
	let arr = [];
	while (i < split.length) {
		let j = 0;
		while (j < split[i].length) {
			if (split[i][j].charCodeAt(0) >= 65 && split[i][j].charCodeAt(0) <= 90) {
				arr.push(String.fromCharCode(split[i][j].charCodeAt(0) + 32));
			} else {
				arr.push(split[i][j]);
			}
			j++;
		}
		if (i < split.length - 1) arr.push('-');
		i++;
	}
	return arr.join('');
}

console.log(spinalCase('This Is Spinal Tap'));