function whatIsInAName(collection, source) {
	// "What's in a name? that which we call a rose
	// By any other name would smell as sweet."
	// -- by William Shakespeare, Romeo and Juliet
	var srcKeys = Object.keys(source);

	// filter the collection
	return collection.filter(function(obj) {
		for (var i = 0; i < srcKeys.length; i++) {
			if (
				!obj.hasOwnProperty(srcKeys[i]) ||
				obj[srcKeys[i]] !== source[srcKeys[i]]
			) {
				return false;
			}
		}
		return true;
	});
}

// test here
console.log(whatIsInAName(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" }
	],
	{ last: "Capulet" }
));