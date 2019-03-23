/*
function x() {
	a = 'yes'; 
	console.log(a);
} x();

console.log(a);

function y() { 
	console.log(a);
} y();
*/

// ES5
/*var Person5 = function(you) {
	this.name = you;
}

Person5.prototype.group = function(friends) {

	var arr = friends.map(function(el) {
		return this.name + ' is friends with ' + el;
	}.bind(this));
	console.log(arr);
};

friends = ['Adani','Ambani','Yogi'];

var modi = new Person5('Modi');

modi.group(friends);

// ES6
var Person6 = function(you) {
	this.name = you;
}

Person6.prototype.group = function(friends) {

	var arr = friends.map(el => {
		return this.name + ' is friends with ' + el;
	})
	console.log(arr);
};

friends = ['Adani','Ambani','Yogi'];

var modi = new Person6('Modi');

modi.group(friends);
*/


// ----------------------------------------------------Classes Vs Prototype
//ES5
/*var Person5 = function(name, yob, job) {
	this.name = name;
	this.yob = yob;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	return (new Date().getFullYear())-this.yob;
}

var man5 = new Person5('Jonas', '1990', 'Teacher');

var age = man5.calculateAge();
console.log(age);

//ES6
class Person6 {
	constructor(name, yob, job) {
		this.name = name;
		this.yob = yob;
		this.job = job;
	}

	calculateAge() {
		console.log(new Date().getFullYear()-this.yob);
	}
}

let man6 = new Person6('Jonas', '1990', 'Mechanic');
man6.calculateAge();

*/
/*
// ----------------------------------------------------Sub-classes
// ES5
var Person5 = function(name, yob, job) { 
	this.name = name;
	this.yob = yob;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	console.log((new Date().getFullYear())-this.yob); 
}

var Athlete5 = function(name, yob, job, sport, medals) {
	Person5.call(this, name, yob, job); // attach 'this' of Person to Athlete
	this.sport = sport;
	this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype); // setting the prototype of Athlete to Person (Making the connection)

Athlete5.prototype.wonAMedal = function() {
	this.medals++;
	console.log('total medals: ' + this.medals);
}

var Phelps = new Athlete5('Michael Phelps','1985','Athlete','Swimming','28');
Phelps.calculateAge();
Phelps.wonAMedal();

//ES6
class Person6 {
	constructor(name, yob) {
		this.name = name;
		this.yob = yob;
	}

	calculateAge() {
		console.log((new Date().getFullYear())-this.yob); 
	}
}

class Athlete6 extends Person6 {
	constructor(name, yob, job, medals) {
		super(name, yob);
		this.job = job;
		this.medals = medals;
	}

	wonAMedal() {
		this.medals++;
		console.log(this.medals);
	}
}

let Bolt = new Athlete6('Usain Bolt', '1986', 'Sprinter', '8');
[name, job] = [Bolt.name, Bolt.job]; // destructring
console.log(name);
Bolt.calculateAge();
Bolt.wonAMedal();*/


