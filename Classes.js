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

/* A class is declared using the class keyword followed by a class name. The class is implemented by declaring fields and methods with braces. A field is a variable that stores data for a class. Each method declaration is similar to a function declaration, but without the function keyword. The method name constructor() is reserved for the class constructor() */

// Example
class City {
    name;
    state;

    constructor(name, state) {
        this.name = name;
        this.state = state;
    }

    toHTML() {
        return this.name + ", &nbsp;" + this.state;
    }
}

let city1 = new City("Austin", "Texas");
let city2 = new City("Madison", "Wisconsin");
console.log(city1.toHTML());

// Private fields and methods

/* Fields and methods can be made private, or inaccessible from outside the class, by prefixing the field or method with #. */

// Example
class City {
    #foundingYear;

    constructor(name, state, foundingYear) {
        this.name = name;
        this.state= state;
        this.#foundingYear = foundingYear;
    }

    toString() {
        return this.name + ", " + this.state + " (" + this.#foundingYear + ")";
    }
}

// Getters and setters

/* A class method declaration preceded by the get keyword defines a getter method for a property. A class method declaration preceded by the set keyword defines a setter method for a property. Defining either a getter or setter method named X, adds a property named X to each class instance. A get method must not have parameters. A set method must have one parameter */

// Example
class Angle {
    constructor(angleRadians) {
        this.radians = angleRadians;
    }

    get degrees() {
        return this.radians * 180.0 / Math.PI;
    }

    set degrees(angleDegrees) {
        this.radians = angleDegrees * Math.PI / 180.0;
    }
}

let angle1 = new Angle(Math.PI);
console.log(angle1.degrees);
angle1.degrees = 270.0;
console.log(angle1.radians);

// Static properties and methods

/* A static property is a property that can be accessed without creating a class instance. A static method is a method that can be called without creating a class instance. Static properties and methods are declared with the static keyword preceding the property's field or method declaration. Static properties and methods cannot be accessed through a class instance. They must be accessed using the syntax ClassName.propertyMethodName */

// Example
class StringOps {
    static description = "String operations";

    static isLowerCase(str) {
        return str.toLowerCase() === str;
    }

    static countChar(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === char) {
                count++;
            }
        }
        return count;
    }
}

console.log(StringOps.description);
console.log(StringOps.isLowerCase("abc"));
console.log(StringOps.isLowerCase("zyBooks"));
console.log(StringOps.countChar("zyBooks", "c"));

// Inheritance

/* The extend keyword allows one class to inherit from another. In the inheriting class' constructor, calling the super() function calls the parent class' constructor. super() must be called before using the this keyword in the inheriting class' constructor */

//Example
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello. My name is " + this.name + ".");
    }
}

// Student inherits from Person
class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age); // Call parent constructor
        this.gpa = gpa;
    }

    // Override parent's sayHello method
    sayHello() {
        console.log("Hi, I'm " + this.name + " with a " + this.gpa + " GPA!");
    }
}