/* A module uses an export statement to list items to be exported */

//hello.js
function sayHello() {
    alert("Hello!");
}

function sayHi() {
    alert("Hi!");
}

export {sayHello, sayHi};

//goodbye.js
function sayGoodbye() {
    alert("Goodbye!");
}

export default sayGoodbye; // If exporting a single item, the default keyword is used in an export statement to name the one item to export

/* A module imports items from another module using an import statement. An import statement indicates which items are to be imported from a module */

// index.html
<html lang="en">
    <head>
        <title>Module Demo</title>
    </head>
    <body>
        <h1>Module Demo</h1>
        <script type="module">
            import {sayHello, sayHi} from "./hello.js";
            import sayGoodbye from "./goodbye.js";

            sayHello();
            sayHi();
            sayGoodbye();
        </script>
    </body>
</html>