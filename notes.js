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










**************************************  FORKIFY API **********************************************************************************************************************************
- dist(distant) and src(source) are two directories in our app's code. 
	dist: all the code which is sent to the client side
	src: our development code, it's bundled together (and sent to dist folder) by webpack, into one file called bundle.js 

- NodeJS packages are of 2 types: 
	1. Libraries & Frameworks
	2. Web Dev Tools 

- Locally install packages (for a particular project)
npm install webpack --save-dev {Saves webpack as a developer dependency}
npm install jquery --save {Installs jquery but not as a dev dependency}

- Globally install packages (for the entire system)
npm install live-server --global {Allows to serve static files over local setup server on port: https://www.npmjs.com/package/live-server} 


- *package.json* file's use:
	1. We need not share entire node_modules folder to know about all the dependencies of the project, when working in a team or on other computer
	2. We can remove node_modules folder and simply use command: npm install, this will fetch all our dependencies and make a node_modules folder


- WEBPACK ----------------------------
1. entry point
2. output
3. loaders: helps in converting and loading files, eg: SASS to CSS, ES6 to ES5
4. plugin

- webpack-dev-server: auto load the changes when file is saved
- webpack.config.js: configuration file for webpack
- .babelrc: configuration file for babel

- POLYFILL: to convert the features of latest versions which were not there in earlier ones, like promises and .toArray()
	* these are the features which couldn't be converted by the Babel loaders
	* this is a real dependency, not a dev dependency, as it atually goes into our final client side code 

- 'axios' : http request protocol, better than fetch because
	1) error handling is better
	2) supported in all browsers
	3) get and post are simultaneous

- SOME NICE NEW THINGS LEARNT
	* webpack-dev-server
	* insertAdjacentHTML: to add HTML-markup(string literals used) to the DOM
	* axios: fetch like http protocol
	* shortening the name of recipes by reduce & join methods (lecture-143, search view part-2)
	* removing/deleting elements from the DOM (moving up the parent and using remove child)
	* JS's closest() method and HTML5 data-* attribute: lecture 145 (pagination + shopping list items)
	* event-delegation/bubbling
	* how to read data from page URL
	* respond to hashchange event
	* add multiple events to same event listener
	* parseIngredient() method in Recipe.js model (lecture-148) 
	* fracty: https://www.npmjs.com/package/fracty (lecture-150)
	* target.matches method (lecture-151)
	* uniqid: https://github.com/adamhalasz/uniqid (to delete and update items) 
	* setAttribute: likes icon toggling on UI (likesView.js)
	* localStorage API