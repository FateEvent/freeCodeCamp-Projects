function	ft_is_prime(nb) {
	let i = 2;
	if (nb <= 1) return 0;
	if (nb == 2147483647) return 1;
	while (i < nb) {
		if (nb % i == 0) return 0;
		i++;
	}
	return 1;
}

function	sumPrimes(num) {
	let sum = 0;
	while (num >= 2) {
		if (ft_is_prime(num)) {
			sum += num;
		}
		num--;
	}
	return sum;
}

console.log(sumPrimes(10));