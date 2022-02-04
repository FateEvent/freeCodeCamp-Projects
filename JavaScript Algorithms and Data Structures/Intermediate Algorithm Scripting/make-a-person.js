const Person = function(firstAndLast) {
	let split = firstAndLast.split(' ');
	this.getFirstName = function() {
		return split[0];
	};
	this.getLastName = function() {
		return split[1];
	};
	this.getFullName = function() {
		return `${split[0]} ${split[1]}`;
	};
	this.setFirstName = function(newFirstName) {
		split.splice(0, 1, newFirstName);
	};
	this.setLastName = function(newLastName) {
		split.splice(1, 1, newLastName);
	};
	this.setFullName = function(newFullName) {
		split = newFullName.split(' ');
	};
};

const bob = new Person('Bob Ross');
bob.setFullName();