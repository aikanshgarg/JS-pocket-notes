/* let and const are block scoped (available inside blocks where they're defined) */

/****************************************************************************************************************************************************************************************************

// Blocks and IIFEs

- we can achieve data privacy by using curly braces, instead of IIFEs (but var doesn't follow block scope of braces)

--------------------------------------------------------------------------------------------------------------------------------------------------

// Strings

Template Literals
	- enclose within back ticks, ``
	- to put value of variables, ${}
- Methods: startsWith, endsWith, includes, repeat

---------------------------------------------------------------------------------------------------------------------------------------------------

// Arrow Functions
https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26

- in a regular function call, the 'this' keyword will always point to the global object(window)


const years = [1990, 1965, 1982];

ES5
	- var ages = years.map(function(cur) {
		return 2019-cur;
	});

ES6
	- let ages = years.map(cur => 2019-cur); // one argument only
	
	- let ages = years.map((cur, index) => 2019-cur); // two arguments OR no arg, we need () 
	
	- let ages = years.map((curr, index) => { // more than one argument & more than one line inside the callback fn, return is now required 
		// some bigger code
		return something;
	});	


- WHEN TO USE '=>' ?
	We should use arrow fns when we need to preserve 'this' keyword 


---------------------------------------------------------------------------------------------------------------------------------------------------

// Destructuring: way to extract data as an object/array from a data structure

- useful to return multiple values from a function, we don't need to return an object like we did in ES5

ES5
- var john = ['John', 26];
  var name = john[0];
  var age = john[1];

ES6
- const [name, age] = ['John', 26];


---------------------------------------------------------------------------------------------------------------------------------------------------

// Arrays

- 'from' method to convert from one ds to other
- 'for-of' loop: for loop + forEach


- 'spread' operator: used to expand the elements of an array/nodelist
	Use cases -> Joining arrays, extracting their elements to pass them into fns

* Possible Interview question: Using two es6 methods show how you transform a Node List of paragraphs into a true array. 
	1) const arr = Array.from(document.querySelectorAll('p')); // items added one by one while making array
	2) const arr = [...document.querySelectorAll('p')]; // first array is made of infinite length, then items added



---------------------------------------------------------------------------------------------------------------------------------------------------
// REST PARAMETERS: allow us to pass arbitrary no. of args in a function and use them there

- act opposite to spread: take elements and make them into an array
- spread is used in fn call while rest is used in fn declaration


---------------------------------------------------------------------------------------------------------------------------------------------------
// MAPS
- methods: .set(key, value) .get(key) .delete(key) .has(key) .clear() .size
- Better than objects because:
	1. we can make key of any data type
	2. iterable
	3. size of map can be obtained easily
	4. deleting

for(let [key, value] of  map.entries()) {} // 'for-of' loop syntax


---------------------------------------------------------------------------------------------------------------------------------------------------
// CLASSES: syntactical sugar for inheritance & prototypes

- static methods of class are not available to instances of that class. They can only be accessed through the class itself
- class definitions are not hoisted like fn constructors. Thus, we need to define them first and then use in our code


// SUB-CLASSES

-> ES5

- var Athlete = function(person's arguments + new arguments which we want to add to athlete){ 
	Person.call(this, person's arguments);
	this.new_arg = new_arg;
  }

- Athlete.prototype = Object.create(Person.prototype); // now the sub class inherits the properties of super class



-> ES6

- class Athlete extends Person {
	constructor(person's arguments + new arguments which we want to add to athlete)	{
		super(person's arguments)
		this.new_arg = new_arg;
  	}
 }




---------------------------------------------------------------------------------------------------------------------------------------------------
// PROMISES
- Object that keeps track about whether a certain event has happened already or not;

- Determines what happens after event has happened;

- resolve/reject are two fns which are called depending on whether promise is fulfilled or not;

- then/catch are two methods used on promise objects, to consume our promise

- async/await: feature introduced in ES8/2017 to consume promises
	* async function always runs in the background!
	* async function always returns a promise!

*****************************************************************************************************************************************************************************************************/
