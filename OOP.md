### what is OOP?

A programming paradigm based on the concept of objects. These objects have some data(variables) and behaviour(funtions) stored inside them and act as a small application on their own(self-contained code). We use APIs(public interface) to interact with these objects outside of their scope.
OOP's main purpose: organizing code to make it clean and maintainable

![Alt text](image-15.png)

### 4 priniciples of OOP

1. ABSTRACTION: hiding the behind-the-scenes details which are not relevant for implementation. Ex: addEventListener()
2. ENCAPSULATION: keeping methods and ppts private inside the class to prevent manipulation from outside
3. INHERITANCE: child-parent class relationship to reuse common logic
4. POLYMORPHISM: a child can overwrite the method it inherited from parent

### OOP in JavaScript!

![Alt text](image-16.png)
![Alt text](image-17.png)

#### Funtion constuctors

We should never write fns inside fn constructors as all the instances/objects created with 'new' keyword will inherit these methods, even if they are not required for that particular instance.
![Alt text](image-18.png)

Instead, we use Prototype to do this.
![Alt text](image-19.png)

#### Prototype Inheritance and chain

![Alt text](image-20.png)

Each object in JS has a prototype property (top of chain has object.prototype set as 'null').
JS Engine keeps looking-up in the prototype chain for methods which are defined.
![Alt text](image-21.png)
In above example, (jonas.**proto**.**proto**.**proto**) === null; //true

Example of Arrays:

![Alt text](image-22.png)
By accessing Array.prototype, we can modify/add a fn inside original Array object. Now, all the array objects created can use this. But this is _not a good practice_ in general.

#### ES6 Classes

They are just syntactical sugar on top of prototypes
![Alt text](image-23.png)

Basically classes are special type of funtions(note: fns are hoisted, classes are not) behind the scenes.
First-class citizens means classes can be passed through other fns
![Alt text](image-24.png)

#### Getters & Setters

![Alt text](image-25.png)

#### Static Methods

These are not attached to object's prototype property, rather attached directly to the object.
For example: _*Array.from();*_, here we can't do [1,2,3].from() as .from is not available to instances of array but only to Array object itself

#### Object.create

![Alt text](image-26.png)

#### Inheritance in Classes

_Using Constructor Funtions_
![Alt text](image-27.png)

Using ES6 Classes(syntactical sugar; under the hood works same as constr. fn)
![Alt text](image-28.png)

#### Encapsulation: Private Class Fields and Methods

![Alt text](image-29.png)
![Alt text](image-30.png)

### CLASSES SUMMARY

![Alt text](image-31.png)
