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
parseInt("dog") == NaN (Not a Number)

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

