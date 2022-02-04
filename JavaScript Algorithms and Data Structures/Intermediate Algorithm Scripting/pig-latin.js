/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster,
move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
	let split = str.split('');
	let initialReg = /^[b-df-hj-np-tv-z]+/;
	let vowReg = /[aeiou]/;
	let consRegex = /[b-df-hj-np-tv-z]/;
	let arr = [];
	let i = 0;
	let index = 0;
	if (initialReg.test(split)) {
		while (!vowReg.test(split[i])) {
			index++;
			i++;
		}
		while (i < str.length) {
			arr.push(str[i]);
			i++;
		}
		arr.push(split.slice(0, index).join(''));
		arr.push('ay');
	} else {
		i = 0;
		while (i < str.length) {
			arr.push(str[i]);
			i++;
		}
		arr.push('way');
	}
	return arr.join('');
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rythm"));
console.log(translatePigLatin("glove"));