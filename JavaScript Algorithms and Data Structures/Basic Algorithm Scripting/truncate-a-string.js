function truncateString(str, num) {
	let s = str[0];
	if (num <= 0) return '...';
	if (num == 1) return s + '...';
	else {
		let x = 1;
		while (x < num && x < str.length) {
			s += str[x];
			x++;
		}
		if (str.length <= num) return s;
		else return s + '...';
	}
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));