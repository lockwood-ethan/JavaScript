/*

A JavaScript class is a special function, called a constructor function, that defines properties and methods from which an object may inherit. A constructor function is a function that initializes a new object when an object is instantiated with the new operator. The this keyword refers to the current object and is used to access properties inside the class

*/

// Example
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log("Hello, " + this.name);
    };
};

let bob = new Person("Bob", 21);
let sue = new Person("Sue", 40);

bob.sayHello();
sue.sayHello();

// Prototype object

/* Every JavaScript object is associated with a second object called the prototype. The prototype object contains properties that an associated object inherits when the associated object is created */

// Assigning methods to the prototype object is more memory efficient
function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.sayHello = function() {
    console.log("Hello, " + this.name);
};

let bob = new Person("Bob", 21);
let sue = new Person("Sue", 40);
let pam = new Person("Pam", 32);

// Private properties and closures

/* A private property is a property that is only accessible to object methods but is not accessible from the outside of the class. A closure is a special object that is automatically created and maintains a function's local variables and values after the function has returned */

// Example
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Private
    let secret;

    // Public methods have access to private properties
    this.setSecret = function(s) {
        secret = s;
    };

    this.getSecret = function() {
        return secret;
    };
};

let bob = new Person("Bob", 21);
bob.setSecret("I have mutant powers!");
console.log(bob.getSecret()); // I have mutant powers!
console.log(bob.secret);// undefined

// Inheritance

/* Inheritance creates a new child class that adopts properties of a parent class. Implementing inheritance in JavaScript is more complicated than most other programming languages. For a child class to inherit from a parent class, 3 operations must be performed:

- The child class calls to the parent class' constructor function from the child's constructor function using the call() method
- The Object.create() method copies the parent's prototype, and the new copy is assigned to the child's prototype to give the child class the same functionality as the parent class
- The child class' prototype.constructor is explicitly set to the child's constructor function */

// Parent class
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("Hello. My name is " + this.name);
};
Person.prototype.sayGoodbye = function() {
    console.log("Goodbye!");
};

// Child class
function Student(name, gpa) {
    Person.call(this, name);
    this.gpa = gpa;
}

// Duplicate functionality of parent
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Replace the parent's sayHello with a new method
Student.prototype.sayHello = function() {
    console.log("Hi, I'm " + this.name + " with a " + this.gpa + " GPA!");
}

let bob = new Student("Bob", 3.5);
bob.sayHello();
bob.sayGoodbye();

// Classes in EcmaScript 2022

