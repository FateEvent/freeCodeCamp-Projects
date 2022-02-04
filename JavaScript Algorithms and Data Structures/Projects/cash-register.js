/*
Design a cash register drawer function checkCashRegister() that accepts purchase
price as the first argument (price), payment as the second argument (cash), and
cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key
and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than
the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the
key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and
bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function sumUp(cid) {
	let sum = 0;
	let i = 0;
	while (i < cid.length) {
		sum += cid[i][1] * 100;
		i++;
	}
	return sum;
}

//	I multiply by 100 every coin and banknote denomination so that
//	I avoid the JavaScript floating number (im)precision issue
function multiplyBy100(cid) {
	let i = 0;
	while (i < cid.length) {
		cid[i][1] *= 100;
		i++;
	}
}

//	I divide by 100 every coin and banknote denomination
function divideBy100(cid) {
	let i = 0;
	while (i < cid.length) {
		cid[i][1] /= 100;
		i++;
	}
}

function checkCashRegister(price, cash, cid) {
	const cashRegister = {
		status: "OPEN",
		change: []
	};
	let sum = sumUp(cid);
	let difference = (cash - price) * 100;
	let count = 0;
	let i = 0;
	multiplyBy100(cid);
	if (difference >= 10000 && cid[8][1] >= 10000) {
		while (difference >= 10000 && cid[8][1] >= 10000) {
			difference -= 10000;
			sum -= 10000;
			cid[8][1] -= 10000; // scalo 100 dall'array, ma ora devo aggiungerli a change
			count += 10000;
		}
		cashRegister.change.push(["ONE HUNDRED", count / 100]);
	}
	count = 0;
	if (difference >= 2000 && cid[7][1] >= 2000) {
		while (difference >= 2000 && cid[7][1] >= 2000) {
			difference -= 2000;
			sum -= 2000;
			cid[7][1] -= 2000;
			count += 2000;
		}
		cashRegister.change.push(["TWENTY", count / 100]);
	}
	count = 0;
	if (difference >= 1000 && cid[6][1] >= 1000) {
		while (difference >= 1000 && cid[6][1] >= 1000) {
			difference -= 1000;
			sum -= 1000;
			cid[6][1] -= 1000;
			count += 1000;
		}
		cashRegister.change.push(["TEN", count / 100]);
	}
	count = 0;
	if (difference >= 500  && cid[5][1] >= 500) {
		while (difference >= 500 && cid[5][1] >= 500) {
			difference -= 500;
			sum -= 500;
			cid[5][1] -= 500;
			count += 500;
		}
		cashRegister.change.push(["FIVE", count / 100]);
	}
	count = 0;
	if (difference >= 100 && cid[4][1] >= 100) {
		while (difference >= 100 && cid[4][1] >= 100) {
			difference -= 100;
			sum -= 100;
			cid[4][1] -= 100;
			count += 100;
		}
		cashRegister.change.push(["ONE", count / 100]);
	}
	count = 0;
	if (difference >= 25 && cid[3][1] >= 25) {
		while (difference >= 25 && cid[3][1] >= 25) {
			difference -= 25;
			sum -= 25;
			cid[3][1] -= 25;
			count += 25;
		}
		cashRegister.change.push(["QUARTER", count / 100]);
	}
	count = 0;
	if (difference >= 10 && cid[2][1] >= 10) {
		while (difference >= 10 && cid[2][1] >= 10) {
			difference -= 10;
			sum -= 10;
			cid[2][1] -= 10;
			count += 10;
		}
		cashRegister.change.push(["DIME", count / 100]);
	}
	count = 0;
	if (difference >= 5 && cid[1][1] >= 5) {
		while (difference >= 5 && cid[1][1] >= 5) {
			difference -= 5;
			sum -= 5;
			cid[1][1] -= 5;
			count += 5;
		}
		cashRegister.change.push(["NICKEL", count / 100]);
	}
	count = 0;
	if (difference >= 1 && cid[0][1] >= 1) {
		while (difference >= 1 && cid[0][1] >= 1) {
			difference -= 1;
			sum -= 1;
			cid[0][1] -= 1;
			count += 1;
		}
		cashRegister.change.push(["PENNY", count / 100]);
	}
	divideBy100(cid);
	sum /= 100;	// sum is divided by 100 before it's compared to difference
	if (sum === difference) {
		cashRegister.status = "CLOSED";
		let i = 0;
		let j = 0;
		while (i < cashRegister.change.length) {
			while (j < cid.length) {
				if (cid[j][1] == 0) {
		  			if (cid[j][0] != cashRegister.change[i][0])
						cashRegister.change.push(cid[j]);
				}
				j++;
			}
			i++;
		}
		return cashRegister;
	} else if (sum > difference) {
		cashRegister.status = "OPEN";
		return cashRegister;
	} else if (sum < difference) {
		cashRegister.status = "INSUFFICIENT_FUNDS";
		cashRegister.change = [];
		return cashRegister;
	}
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));  // {status: "INSUFFICIENT_FUNDS", change: []}