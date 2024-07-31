// Ways to declare/assign variables
let variable; // Declare with no assignment
variable = "This can be any data type" // Assign after declaration
let variable = "This can be any data type" // Declare with assignment
variable = "This can be any data type" //Assign without being declared first (not best practice)

// A variable declared using var or let that is not inside a function creates a global variable that is accessible from anywhere in the code

/* Data types
string
number
boolean
array
object // Dictionary
undefined // let variable; (Declare with no assignment)
null
*/

// Obtain text input from the user (returns null if user presses cancel)
prompt("Insert message here")

// Outputs/displays text to the console/screen
console.log("Insert message here")

/* Arithmetic operators
+ | Add
- | Subtract
* | Multiply
/ | Divide
% | Modulus (remainder)
** | Exponentation
++ | Increment
-- | Decrement
*/

/* Compound arithmetic operators
+= | Add to
-= | Subtract from
*= | Multiply by
/= | Divide by
%= | Mod by
// When using compound operators wrap expressions after equals sign in parentheses:
points = 2
points *= 3 + 1 == points = points * (3 + 1)
*/

// Convert strings to numbers
parseInt("5") == 5
parseFloat("5") == 5.0
parseInt("dog") == NaN // Not a Number

// Check if data type is NaN - Not a Number
isNaN("5") == false
isNaN("dog") == true

// If statement structure
if (condition) {
    // Statements to execute when condition is true
}

// If-else statement structure
if (condition) {
    // Statements to execute when condition is true
}
else {
    // Statements to execute when condition is false
}

// Curly braces are not required around if-else blocks with a single statement, but it is best practice to use them anyways
if (vote == "M")
    memberCount++;
else
    nonMemberCount++;

// Nested if-else statement structure
if (condition) {
    if (condition) {
        // Statements to execute when condition is true
    }
    else {
        // Statements to execute when condition is false
    }
}
else {
    if (condition) {
        // Statements to execute when condition is true
    }
    else {
        // Statements to execute when condition is false
    }
}

// Else-if statement structure, alternative to nested if/if-else statements
if (condition) {
    // Statements to execute when condition is true
}
else if (condition) {
    // Statements to execute when condition is true
}
else {
    // Statements to execute when condition is false
}

/* Comparison operators
== | Equality
!= | Inequality
=== | Identity // "Strict" equality, only true if value AND data type are the same
!== | Non-identity
< | Less than
<= | Less than or equal
> | Greater than
>= | Greater than or equal
// Comparison operators convert strings to numbers automatically when comparing strings to numbers ex: "5" > 3 == true
// If two strings containing letter characters are compared, the sum of the unicode number values are compared
*/ 

/* Logical operators
&& | AND // True if both sides are true
|| / OR // True if either side is true
! | NOT // True if expression is not true
// && is always evaluated before || in order of operations
*/

// Conditional (ternary) operator structure
condition ? expression1 : expression2

// Switch statement structure
switch (expression) {
    case value1:
        // Statements executed when expression's value matches value1
        break; // Optional
    case value2:
        // Statements executed when expression's value matches value2
        break; // Optional
    
    // ...

    default:
        // Statements executed when no cases match
}
// Switch statements use strict comparison (===) expression must match case exactly (value AND data type)

// While loop structure
while (condition) {
    //Statments to execute while condition is true
}

// Do-while loop structure
do {
    body
} while (condition);

// For loop structure
for (initialization; condition; finalExpression) {
    body
}

// The break; statement breaks out of a loop prematurely
break;
// The continue; statement causes a loop to iterate again without executing the remaining statements in the loop
continue;

// Function structure
function functionName(parameter1, parameter2, ...) {
    // Statements to execute when function is called
}

// Function expression structure
let variableName = function(x, y, z) {
    // Statments to execute when variableName is called
}

// Arrow function structure
let variableName = (parameter1, parameter2, ...) => expression
let variableName = (parameter1, parameter2, ...) => { statements; }

// A variable declared inside a function with var has function scope: the variable is accessible anywhere within the function, but not outside
// A variable declared with let has block scope: the variable is accessible only within the enclosing pair of braces

// Array methods

// Push(value) adds a value to the end of the array
let nums = [2, 4, 6];
nums.push(8); // nums = [2, 4, 6, 8]

// Pop() removes the last array element and returns the element
let nums = [2, 4, 6];
let x = nums.pop(); // returns 6, nums = [2, 4]

// Unshift(value) adds a value to the beginning of the array
let nums = [2, 4, 6];
nums.unshift(0); // nums = [0, 2, 4, 6]

// Shift() removes the first array element and returns the element
let nums = [2, 4, 6];
let x = nums.shift(); // returns 2, nums = [4, 6]

// Splice(startingIndex, numElemToDelete, valuesToAdd) adds or removes elements from anywhere in the array and returns the deleted elements (if any)
let nums = [2, 4, 6];
// Deletes all elements from index 3 to the end
nums.splice(3); // nums = [2, 4, 6]
// Deletes 2 elements starting at index 0
nums.splice(0, 2); // nums = [6]
// Adds 3, 5 starting at index 0
nums.splice(0, 0, 3, 5); // nums = [3, 5, 6]
// Adds 7, 9, 11 starting at index 2
nums.splice(2, 0, 7, 9, 11); // nums = [3, 5, 7, 9, 11, 6]

// Looping through an array

// For loop using length property
let groceries = ["bread", "milk", "peanut butter"]
// Display all elements in groceries array
for (i = 0; i < groceries.length; i++) {
    console.log(i + " - " + groceries[i]);
}

// For-of loop structure, assigns next array element to variable in front of the "of" keyword each iteration
let groceries = ["bread", "milk", "peanut butter"]
// Display all elements in groceries array
for (let item of groceries) {
    console.log(item);
}

// Array method forEach()
let groceries = ["bread", "milk", "peanut butter"]
// Display all elements in groceries array
groceries.forEach(function(item, index) {
    console.log(index + " - " + item);
});

// Searching an array

// If startingPosition value is entered the search will begin at the entered index value

// indexOf(value, startingPosition) returns the index of the first found element that matches the entered value or -1 if the value is not found
let scores = [80, 92, 75, 64, 88, 92];
s = scores.indexOf(92); // Returns 1

// lastIndexOf(value, startingPosition) returns the index of the last found element that matches the entered value by searching the array backwards, or -1 if the value is not found
let scores = [80, 92, 75, 64, 88, 92];
s = scores.lastIndexOf(92); // Returns 5

// Sorting an array

// Array method sort() sorts an array in ascending order, sort()'s default behavior is to sort each element as a string using unicode values
let numbers = [200, 30, 1000, 4];
// Sort based on Unicode values
numbers.sort(); // [1000, 200, 30, 4]
// Sort numbers in ascending order
numbers.sort(function(a,b) {
    return a - b;
});

// Object literal (Dictionary/Hash Table)

/* An object is an unordered collection of properties */

// Object structure
let object = {
    key: "value"
    key: value
    key: [value1, value2, value3]
    key: {
        nested_key: "nested value"
    }
};

// Defining a method in an object literal
let book = {
    title: "Quiet",
    author: {
        firstName: "Susan",
        lastName: "Cain"
    },

    // Define a method
    getAuthorName() {
        return this.author.firstName + " " + this.author.lastName;
    }
};

// Call the method that is defined inside the object
let name = book.getAuthorName();

// Accessor properties

// Getter
get property() { return someValue; }

// Setter
set property(value) { ... }

// Getter/Setter example
let rectangle = {
    width = 5,
    height = 8,
    get area() {
        return this.width * this.height;
    },
    set area(value) {
        // Set width and height to the square root of the value
        this.width = Math.sqrt(value);
        this.height = this.width;
    }
};

let area = rectangle.area; // Calling getter returns 40
rectangle.area = 100; // Calling setter sets width and height to 10
console.log(rectangle.width); // 10

/* 
Javascript data types can be divided into two categories: primitives and references
- A primitive is data that is not an object and includes no methods (boolean, number, string, null and undefined)
- A reference is a logical memory address. Only objects are reference types
*/

// Maps/Objects as maps

/* A map or associative array is a data structure that maps keys to values. Each key to value pair is called an element */

// Map structure
let stateCapitals = {
    AR: "Little Rock",
    CO: "Denver",
    NM: "Sante Fe"
};

console.log("CO capital is " + stateCapitals["CO"]);

stateCapitals["TX"] = "Austin";

// Nested map objects
let contacts = {
    Rosa: {
        phone: "303-555-4321",
        email: "rosa@gmail.com"
    },
    Dave: {
        phone: "501-533-9988",
        email: "dave@yahoo.com"
    },
    Li: {
        phone: "213-511-6785",
        email: "li@msn.com"
    }
};

console.log(contacts["Dave"].email); // Output Dave's email address

contacts["Rosa"].twitter = "@rosaLuvsCats"; // Assigns property twitter with "@rosaLuvsCats" to the nested Rosa object

contacts["John"] = {
    phone: "111-2222",
    email: "john@work.org"
} // Adds the John object to the contacts map object

// For-in loop

/* The for-in loop iterates over an objects properties in arbitrary order and is ideal for looping through an object's map elements */

// For-in loop structure
for (let variable in object) {
    body
}

//Example
let stateCapitals = {
    AR: "Little Rock",
    CO: "Denver",
    NM: "Sante Fe"
};

console.log("All capitals")
for (let state in stateCapitals) {
    console.log(state + " is " + stateCapitals[state]);
} // Outputs key and value of every pair in stateCapitals map object

// Other object map operations

/*
- Object.keys() returns an array of an objects property names, the arrays length property returns the number of elements in the object map
- The in operator returns true if an object contains the given property and returns false otherwise
- The delete operator removes a key/property from a map or object
*/

// Example
let stateCapitals = {
    AR: "Little Rock",
    CO: "Denver",
    NM: "Sante Fe"
};

let states = Object.keys(stateCapitals);
console.log(states) // Outputs array
console.log(states.length) // Outputs array length

// Evaluates true
if ("NM" in stateCapitals) {
    console.log("NM exists");
}

// Remove the NM/Sante Fe pair
delete stateCapitals["NM"];

//Evaluates false
if ("NM" in stateCapitals) {
    console.log("NM exists");
}

// Outputs undefined
console.log(stateCapitals["NM"]);

// Map object

/* The Map object is a newer alternative to using objects for storing key/value pairs. Common methods and properties of the map object include:

- The set(key, value) methis sets a key/value pair. If the key is new, a new element is added to the map. If the key already exists, the new value
replaces the existing value
- The get(key) method gets a key's associated value
- The has(key) method returns true if a map conains a key, false otherwise
- The delete(key) method removes a map element
- The size property is the of elements in the map

*/

// Map object structure
let stateCapitals = new Map();
stateCapitals.set("AR", "Little Rock");
stateCapitals.set("CO", "Denver");
stateCapitals.set("NM", "Sante Fe");

console.log("Size of map is " + stateCapitals.size);

if (stateCapitals.has("CO")) {
    console.log("CO capital is " + stateCapitals.get("CO"));
}

//For-of loop
console.log("All capitals:");
for (let [state, capital] of stateCapitals) {
    console.log(state + " is " + capital);
} // Each of the maps key/value pairs are assigned with the [key, value] variables declared in the for-of loop

// String object

/* The String object defines methods to manipulate strings, extract substrings, test for string inclusion, etc.

- The method charAt() returns the character at the specified index as a string. "test".charAt(1) returns the character "e" at index 1
- The length property returns the number of characters in a string
- The indexOf() method returns the index of the search string's first occurence inside the string object or -1 if the search string is not found
- The lastIndexOf() method returns the index of the search string's last occurence inside the string object or -1 if the search string is not found
- The replace() method replaces one string with another and returns the string with the replacement string inside

*/

// Example of charAt() and length in use
let s = "I love JS";
let totalSpaces = 0;

for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) === " ") {
     totalSpaces++;
  }
}

console.log(totalSpaces + " spaces");

// Example of indexOf() and lastIndexOf()
s = "Seek and you will find.";
s.indexOf("and");    // 5
s.indexOf("e");      // 1 (first occurrence)
s.lastIndexOf("e");  // 2 (last occurrence)
s.indexOf("SEEK");   // -1 (case-sensitive search)

// Example of replace()
s = "Seek and you will find.";
s = s.replace("find", "discover");  // "Seek and you will discover"
s = s.replace("Seek", "Search");    // "Search and you will discover"
s = s.replace("SEARCH", "search");  // No change (case-sensitive search)

// Other String methods

// substr() - Returns the substring that begins at a given index and has an optional given length
s = "As you wish.";
s.substr(3, 3);  // "you"
s.substr(3);   // "you wish." (length optional)

// substring() - Returns the substring between two indices, not including the second index
s = "As you wish.";
s.substring(3, 6);  // "you"
s.substring(3);   // "you wish." (2nd index optional)

// split() - Returns an array of strings formed by splitting the string into substrings. The given delimiter separates substrings
s = "As you wish.";
s.split(" ");  // ["As", "you", "wish."]

// toLowerCase() - Returns the string converted to lowercase characters
s = "What?";
s.toLowerCase();  // "what?"

// toUpperCase() - Returns the string converted to uppercase characters
s = "What?";
s.toUpperCase(); // "WHAT?"

// trim() - Returns the string with leading and trailing whitespace removed
s = " test ";
s.trim(); // "test"

// Template literals

/* A template literal is a string literal enclosed by the back-tick(`) that allows embedding expressions with a dollar sign and braces */

// Example
let test = `test ${1 +2}` // evaluates to "test 3"

// Do not need to use \n for newline in template literal
test = `line 1
line 2
line 3`

// Date object

/* A Date object represents a single moment in time, based on the number of milliseconds since the Unix Epoch (January 1, 1970 UTC) */

// Set to current date and time
let currDateTime = new Date(); 

// 1000 milliseconds past Jan 1, 1970
let oneSecPastEpoch = new Date(1000); 

// Set to George Washingtons birthday, month variable range is 0-11 (0 = Jan, 11 = Dec)
let georgeBirthday = new Date(1732, 1, 22); 

// Set to a future date (Oct 21st, 2035 at 7:28:00)
let theFuture = new Date(2035, 9, 21, 7, 28, 0)

// Date methods

// getDate(), setDate() - Gets or sets the day relative to the current set month
let day = new Date(2016, 0, 30);
day.getDate();    // 30
day.setDate(21);  // 30 -> 21

// getDay() - Returns the day of the week (0-6)
let day = new Date(2016, 0, 30);
day.getDay();    // 6 = Saturday

// getFullYear(), setFullYear() - Gets or sets the 4 digit year
let day = new Date(2016, 0, 30);
day.getFullYear();      // 2016
day.setFullYear(2017);  // 2016 -> 2017

// getHours(), setHours() - Gets or sets the hour (0-23)
let day = new Date(2016, 0, 30, 5, 0);
day.getHours();    // 5
day.setHours(2);   // 5 -> 2

// getMilliseconds(), setMilliseconds() - Gets or sets milliseconds(0-999)
let day = new Date(2016, 0, 1, 5, 20, 10, 250);
day.getMilliseconds();     // 250
day.setMilliseconds(500);  // 250 -> 500

// getMinutes(), setMinutes - Gets or sets the minutes (0-59)
let day = new Date(2016, 0, 30, 5, 20);
day.getMinutes();    // 20
day.setMinutes(35);  // 20 -> 35

// getMonth(), setMonth() - Gets or sets the month (0-11)
let day = new Date(2016, 0, 30, 5, 20);
day.getMonth();   // 0
day.setMonth(3);  // 0 (Jan) -> 3 (Apr)

// getSeconds(), setSeconds() - Gets or sets seconds (0-59)
let day = new Date(2016, 0, 1, 5, 20, 10, 250);
day.getSeconds();    // 10
day.setSeconds(45);  // 10 -> 45

// getTime(), setTime() - Gets or sets the number of milliseconds since Jan 1, 1970, 00:00:00 UTC
let day = new Date(2016, 0, 30, 5, 20);
day.getTime();               // 1454152800000
day.setTime(1454153700000);  // Sat Jan 30 2016 05:35:00 GMT-0600

// Math object

/* The Math object provides properties for mathematical constants and methods to perform mathematical functions */

// abs(x) - Returns the absolute value of x
Math.abs(-5); // 5

// ceil(x) - Returns x rounded up to the nearest integer
Math.ceil(2.1); // 3

// cos(x) - Returns the cosine of the radians x
Math.cos(Math.PI); // 1

// floor(x) - Returns x rounded down to the nearest integer
Math.floor(2.9); // 2

// log(x) - Returns the natural logarithm of x
Math.log(Math.E); // 1

// max(n1, n2, n3, ...) - Returns the largest number
Math.max(5, 2, 8, 1); // 8

// min(n1, n2, n3, ...) - Returns the smallest number
Math.min(5, 2, 8, 1); // 1

// pow(x, y) - Returns to the power of y
Math.pow(2, 3); // 8

// round(x) - Returns x rounded to the nearest integer
Math.round(3.5); // 4

// sin(x) - Returns the sine of radians x
Math.sin(Math.PI); // 0

// sqrt(x) - Returns the square root of x
Math.sqrt(25); // 5

// tan(x) - Returns the tangent of radians x
Math.tan(Math.PI / 4) // 1

// The Math.random() method returns a pseudo-random number >= 0 and < 1
for (let i = 0; i < 5; i++) {
    console.log(Math.random());
}

// Return a random integer between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    console.log(getRandomNumber(1, 10));
}

// Exception and try-catch

/* An exception is an error that disrupts the normal flow of program execution. */

// Throw statement structure
throw expression

// Example
throw "number is negative"

// Try-catch structure
try {
    // Statements that might throw an exception
}
catch (expression) {
    // Handle the exception
}

// Finally block

/* A finally block may follow a try or catch block. The finally block executes regardless of whether an exception was thrown or not */

// Try-catch-finally structure
try {
    // Statements to try
}
catch (exception) {
    // Optionally handle exception
}
finally {
    // Code that executes no matter what
}

// Error object

/* 
The error object represents a runtime error, which is an error that occurs when the program is executing. An error object has two properties:

1. name - The error's name
2. message - The error's message

*/

// Error constructor example
err = new Error("My error message.");

/* Other error contructors

RangeError - Thrown when a numeric variable or parameter is outside the valid range
InternalError - Thrown when an internal error occurs in JavaScript interpreter
TypeError - Thrown when a variable or parameter is not the expected data type

*/

