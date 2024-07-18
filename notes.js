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
points *= 3 + 1 === points = points * (3 + 1)
*/

// Convert strings to numbers
parseInt("5") == 5
parseFloat("5") == 5.0
parseInt("dog") == Nan (Not a Number)

// Check if data type is NaN - Not a Number
isNaN("5") == false
isNaN("dog") == true

// 