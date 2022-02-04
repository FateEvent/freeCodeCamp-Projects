function titleCase(str) {
	let i = 0;
	let split = str.split(' ');
	let arr = [];
	while (i < split.length) {
		let j = 1;
		if (split[i][0].charCodeAt(0) >= 97 && split[i][0].charCodeAt(0) <= 122) {
	  		arr.push(String.fromCharCode(split[i][0].charCodeAt(0) - 32));
	  	} else {
			arr.push(split[i][0]);
	  	}
		while (j < split[i].length) {
	  		if (split[i][j].charCodeAt(0) >= 65 && split[i][j].charCodeAt(0) <= 90) {
				arr.push(String.fromCharCode(split[i][j].charCodeAt(0) + 32));
		  	} else {
				arr.push(split[i][j]);
		  	}
		  	j++;
  		}
		if (i < split.length - 1) arr.push(' ');
		i++;
	}
	return arr.join('');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));