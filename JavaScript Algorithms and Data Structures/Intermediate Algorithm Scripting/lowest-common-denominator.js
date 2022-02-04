function lcd(n) {
	let i = 2;
	let arr = [];
	while (i <= n) {
		if (n % i == 0) {
			arr.push(i);
			n /= i;
			i = 1;
		}
		i++;
	}
	return arr;
}