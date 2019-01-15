/*****************************************************

- In its most basic form, a function expression produces a value, while a function statement performs an action.

- everything is an OBJECT in Javascript, almost! Primitives are not objects, all else are.
(However, if we use methods of primitives, they are converted to objects by JS! Example: num.toFixed(2))

- primitives hold value as copy (changes are not reflected), while objects are like pass by reference.

- === is STRICT EQUALITY OPERATOR, compares type as well
  == compares only the content

- forEach vs map: both work similarly, i.e, take a callback fn and attach it to every element of array. Diff is that map returns a brand new array

- 'this' keyword points to window object in regular fn call but points to the concerned object only in case of method call!


****************************** PROTOTYPES & INHERITANCE *************************************************************************

- every JS object has 'Prototype Property' which makes inheritance possible in JS.

- the prototype property of an object is where we put all the properties which we want other objects to inherit.

- constructor's prototype is NOT the prototype of the constructor itself, it's the prototype of ALL instances that are created through it.

- when a method (or property) is called, the search starts from the object and moves up the prototype chain.

- 'NULL' is the final part of prototype chain which has no parent.

- to add a new method/property to any child object of a parent object, using prototype: Parent.prototype.xyzmethod



********** FUNCTION CONSTRUCTORS vs OBJECT.CREATE ************

- function constructor

	var Person = function(name, age){
	this.age = age;
	this.name = name;
	} 
	Person.prototype.calculateAge = function() {
		console.log(2019-this.yearOfBirth);
	}
	var john = new Person('John', 1990);
 

- object.create method
	
	var personProto = {
			calculateAge: function(2019-this.yearOfBirth);
		}
	};
	var John = Object.create(personProto);
	john.name = 'John';
	john.yearOfBirth = 1990;		
				OR
	var Jane = Object.create(personProto, {
		name: { value: 'Jane'},
		yearOfBirth: { value: 1969}
	});



****************************** FIRST CLASS FUNCTIONS *******************************************************************
- return functions from functions

	function isOlympicPlayer(sport) {
		if(sport === 'boxing') {
			return function(name) {
				console.log(name + ' is an Olympian!');
	        }
	    }
		else {
			return function(name) {
				console.log(name + ' plays ' + sport + ', which is not in Olympics.');
	        }
	    }
	};

	isOlympicPlayer('boxing')('Vijendar Singh'); // Output- Vijendar Singh is an Olympian!
	isOlympicPlayer('cricket')('Virat Kohli');   // Output- Virat Kohli plays cricket, which is not in Olympics.

- CLOSURE: here, sport (a variable of outer fn) can be accessed by inner fn as well. 



****************************** IIFE ***********************************************************************************
- used for data privacy
- hide scope of a function variables and methods from outer world
- simply enclose the function in () and call it there itself. // layout- (function() {}) ();



****************************** BIND/CALL/APPLY ************************************************************************

- call method allows us to set 'this' as the first argument, used for method borrowing
- apply allows to pass arguments in an array, rest acts same as call
- bind allows us to create a copy of the fn with a preset argument



****************************** EVENT BUBBLING, TARGET ELEMENT & EVENT DELEGATION **************************************

- event goes up the order, i.e, all the way up from its parents to root of HTML: bubbling
- event may be targeted at a child element but can be fired at any of it's parent element: delegation



**************************************  BUDGET APP **********************************************************************************************************************************

- Modules: function expressions, purpose: private and public data, data encapsulation
- API is an example of hiding data from outside and letting use some fns 
- SECRET of module pattern: returns an object with all the functions that we want to be public or be visible to outside scope
- code example:
	Here, budgetController variable stores only publicTest method (in outside scope), after fn has been called and finished executing

	// MODULE-1: for adding items
	var budgetController = (function() {

		var x = 23;

		var add = function(a) {
			return x + a;
		}

		return { // object is made for access to outside scope
			publicTest: function(b) {
				return add(b);
			}
		}
		

	})();


	// MODULE-2: for UI
	var UIController = (function() {

		// some code

	})();


	// MODULE-3: for connecting modules 1 and 2
	var constroller = (function(budgetCtrl, UICtrl) {

		var z = budgetCtrl.publicTest(5); // z stores 28(x+5) from publicTest method of budgetController
		
		return { // object is made for access to outside scope
			anotherPublic: function() {
				console.log(z);
			}
		}

	})(budgetController, UIController);



- EVENT BUBBLING reason: each item is added AFTER the page is loaded, but, event listeners are set during the loading of the page. So we need to attach the event listener to the parent element, 							 which is loaded right away.

- querySelectorAll: Node list is returned by this method. So, we can't use forEach method of arrays. HACK: convert it into array using slice method 