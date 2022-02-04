/*
Return a new array that transforms the elements' average altitude into their
orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

Visit <https://en.wikipedia.org/wiki/Orbital_period> for more information
about orbital periods.

The values should be rounded to the nearest whole number. The body being
orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	let i = 0;
	while (i < arr.length) {
		arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt((earthRadius + arr[i].avgAlt) ** 3 / GM));
		delete arr[i].avgAlt;
		i++;
	}
	return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));