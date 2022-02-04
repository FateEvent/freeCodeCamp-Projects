// program to generate fibonacci series up to a certain number
function sumFibs(num) {
	let n1 = 0;
	let n2 = 1;
	let nextTerm = n1 + n2;
	let sum = 0;
	while (nextTerm <= num) {
		if (nextTerm % 2 == 1) {
			sum += nextTerm;
		}
		n1 = n2;
		n2 = nextTerm;
		nextTerm = n1 + n2;
	}
	return sum + 1;	// 1 is the second element of the sequence
}

console.log(sumFibs(1));
console.log(sumFibs(4));	// 5
console.log(sumFibs(75024));	// 60696
console.log(sumFibs(75025));	// 135721
console.log(sumFibs(4000000));	// 4613732