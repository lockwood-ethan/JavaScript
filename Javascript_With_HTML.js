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

// Document Object Model

/* The Document Object Model (DOM) is a data structure corresponding to the HTML document displayed in a web browser */

// DOM Tree

/* A DOM Tree is a visualization of DOM data structure */

/* 
A node is an individual object in the DOM tree. Nodes are created for each element, the text between an element's tags, and the element's attributes

- The root node is the node at the top of the DOM
- A child node is the node directly under another node. A node can have zero, one, or more child nodes (children
- A parent node is the node directly above another node. All nodes, except the root node, have one parent node
*/

// Searching the DOM

document.getElementById() // Returns the DOM node whose id attribute is the same as the method's parameter

document.getElementsByTagName() // Returns an array of all the DOM nodes whose type is the same as the method's parameter

document.getElementsByClassName() // Returns an array containing all the DOM nodes whose class attribute matches the method's parameter

document.querySelectorAll() // Returns an array containing all the DOM nodes that match the CSS selector passed as the method's parameter

document.querySelector() // Returns the first element found in the DOM that matches the CSS selector passed as the method's parameter

/* 
Technically, getElementsByTagName() and getElementsByClassName() return an HTMLCollection, and querySelectorAll() returns a NodeList

HTMLCollection - An interface representing a generic collection of elements

NodeList - An object with a collection of nodes

HTMLCollection and NodeList both act like an array. Both have a length property and elements can be accessed with braces
*/

// Modifying DOM node attributes

/* 
JavaScript can perform actions including:

- Change which image is displayed by modifying an img element's src attribute
- Determine which image is currently displayed by reading the img element's src attribute
- Change an element's CSS styling by modifying an element's style attribute

Every attribute for an HTML element has an identically named property in the element's DOM node

Example: 
<a href="https://www.nasa.gov/" id="nasa_link">NASA</a> has a corresponding DOM node with properties names href and id. Each attribute property name
acts as both a getter and a setter
*/

// Getter example
let nasaURL = document.getElementById("nasa_link").href // Assigns nasaUrl the string "https://www.nasa.gov/" from the anchor element's href attribute

// Setter example
document.getElementById("nasa_link").href = "https://www.spacex.com/" // Changes the elements hyperlink to the SpaceX URL

// An element's attribute can be removed using the element method removeAttribute()
document.getElementById("nasa_link").removeAttribute("href") // Removes the link from the anchor element so that clicking on the HTML element no longer performs an action

// Modifying DOM node content

// The textContent property gets or sets a DOM node's text content
document.querySelector("p").textContent = "$25.99"

// The innerHTML property gets or sets a DOM node's content, including all of the node's children, using an HTML formatted string
document.querySelector("p").innerHTML = "<strong>$25.99</strong>" // Changes paragraph to <p><strong>$25.99</strong><p>

// nodeValue is a less common way to change node content
document.getElementById("saleprice").firstChild.nodeValue = "$25.99" // firstChild accesses the textual content node for the element

// innerText is an alternative to textContent that is aware of how text is rendered in the browser
document.querySelector("p").innerText = "Testing     one" // Returns "Testing one" instead of "Testing    one"
