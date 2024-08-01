// Basics

// Document object

/* The Document Object Model is a data structure that represents all parts of an HTML document. The JavaScript document represents the entire DOM and
is created from the documents HTML. Changes made to document are reflected in the browser presentation and/or behavior */

// Example of document usage
document.writeln("<p>Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>.</p>");

// Window object

/* JavaScript running in a browser has access to the window object, which represents an open browser window. In a tabbed browser, each tab has a window
object. The document object is a property of the window object and can be accessed as window.document or just document */

// Other properties of window object

window.location // A location object that contains information about the window's current URL

window.navigator // Is a navigator object that contains information about the browser

window.innerHeight, window.innerWidth // Contain the height and width in pixels of window's content area

// Window object methods

window.alert() // Displays an alert dialog box

window.confirm() // Displays a confirmation dialog box with OK and Cancel buttons. Returns true if OK is pressed and false if Cancel is pressed

window.open() // Opens a new browser window

// You can access window object properties and methods without putting window in front of it window.alert("test") and alert("test") are equivalent

// Console object

/* The browser provides a console object with a defined set of methods, or API, that the console object supports. An API (Application Programming Interface)
is a specification of the methods and objects that defines how a programmer should interact with software components. */

// The console API includes the following methods

console.log() // Displays informational data to the console

console.warn() // Displays warnings to the console. The browser usually has a special indicator to differentiate a warning from the standard log message

console.error() // Displays errors to the console. The browser usually has a special indicator to differentiate an error from a warning or the standard log message

console.dir() // Displays a JavaScript object to the console. The browser usually supports a method for compactly representing the object

// Loading JavaScript from an external file

/* Good practice is to use <script> elements to load JavaScript from an external file rather than writing the JavaScript directly within the HTML file. 
The <script> element's src attribute specifies a JavaScript file to load */

// Example call to JS file using an HTML tag
<script src="bootstrap.js"></script> // Self closing tags <script /> do not work in modern browsers for the script element

/* Loading JavaScript from an external file with async and defer

- The <script> element's async attribute allows the browser to process the webpage concurrently with loading and processing JavaScript

- The <script> element's defer attribute allows the browser to load the webpage concurrently with loading JavaScript, but the JavaScript is not 
processed until the webpage is completely loaded */

/* Minification or minimization is the process of removing unnecessary characters (like whitespace and comments) from JavaScript code so the code
executes the same but with fewer characters. */

