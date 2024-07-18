// Ways to declare/assign variables
let variable; // Declare with no assignment
variable = "This can be any data type" // Assign after declaration
let variable = "This can be any data type" // Declare with assignment
variable = "This can be any data type" //Assign without being declared first (not best practice)

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

