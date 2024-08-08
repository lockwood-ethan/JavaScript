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

// Accessing nodes

// The JavaScript object document.documentElement is the root of the DOM tree
let html = document.documentElement //Assigns the variable html with the document's root node
 
document.documentElement.parentNode // Refers to the node's parent

document.documentElement.childNodes // An array-like collection of objects for each node's children

document.documentElement.children // Similar to the childNodes except the array contains only element nodes and no text nodes

document.documentElement.nextElementSibling // Refers to the element node with the same parent following the current node in the document

document.documentElement.previousElementSibling //  Refers to the element node with the same parent preceeding the current node in the document

// Modifying the DOM structure

// The appendChild() method appends a DOM node to the object's child nodes
let ol = document.getElementsByTagName("ol")[0];
let li = ol.getElementsByTagName("li")[0];
ol.appendChild(li); // Moves the ordered list's first item to the last item of the same ordered list

// The insertBefore() method inserts a DOM node as a child before an object's existing child node
ol = document.getElementsByTagName("ol")[0];
let items = ol.getElementsByTagName("li");
ol.insertBefore(items[0], items[3]); // Moves the ordered list's first item before the fourth list item

// The removeChild() method removes a node from the objects children
ol = document.getElementsByTagName("ol")[0];
items = ol.getElementsByTagName("li");
items[0].parentNode.removeChild(items[0]); // Calls removeChild on the parent node of items[0] passing items[0] as the argument

// Creating new nodes or duplicating existing nodes

// The document method createElement() returns a new element node, created from a string argument that names the HTML element
document.createElement("p") // creates a new paragraph element

// The document method createTextNode() returns a new text node containing the text specified by a string argument
document.createTextNode("Hello there!") // Creates the text node with "Hello there!", which can then be appended to an element node

// The node method cloneNode() returns an identical copy of a DOM node. The methods boolean argument indicates whether the method should also clone the node's children
x.cloneNode(true) // Creates an identical tree rooted at x
x.cloneNode(false) // Creates a single node identical to x
/* The cloneNode() method does not ensure that new nodes have unique id attributes */

// Event-driven programming

/* An event is an action, usually caused by a user, that the web browser responds to. Event-driven programming is a style where code runs only in response to various events, code that runs in response to an event is called an event handler or event listener

// The following  are events for which web developers commonly write handlers:

Change - Caused by an element value being modified

Input - When the value of an input or textarea element is changed

Load - When the browser completes loading a resource and dependent resources. Usually load is used with the body element to execute code once all the webpage's CSS, JavaScript, images, etc. have finished loading

DOMContentLoad - When the HTML file has been loaded and parsed, although other related resources such as CSS, JavaScript, and image files may not yet be loaded

Focus - When an element becomes the current receiver of keyboard input

Blur - When an element loses focus and the element will no longer receive future keyboard input

Submit - When the user submits a form to the web server
*/

// Handlers are written 3 ways

<button onclick="clickHandler()">Click Me</button> // Embedding the handler as part of the HTML
// Embedding a handler in HTML mixes content and functionality and should be avoided whenever possible

document.querySelector("#myButton").onclick = clickHandler // Setting the DOM node event handler property directly using JavaScript
// A disadvantage of this of using this method is that setting the property only allows one handler for that element to registered

document.querySelector("#myButton").addEventListener("click", clickHandler) // Using the JavaScript addEventListener() method to register an event handler for a DOM object
// Good practice is to use the addEventListener() method whenever possible

// Capturing, at target, and bubbling phases

/* When an event occurs, the browser follows a simple DOM traversal process to determine which handlers are relevant and need to be called. The DOM traversal process has three phases: capturing, at targetm and bubbling.

Event capturing - The browser traverses the DOM tree from the root to the event target at each node, at each node calling any event-specific handlers that were explicitly registered for activation during the capturing phase

At target - The browser calls all event-specific handlers registered on the target node

Event bubbling - The browser traverses the DOM tree from the event target node back to the root node, at each node calling all event-specific handlers registered for the bubbling phase on the current node
*/
// Some events do not bubble, such as blur, focus, and change

// Preventing default behavior

/* The event capturing and bubbling process can be stopped using the stopPropogation() method on the event object provided to the handler. Once stopPropogation() is called, the browser stops the traversal process but still calls relevant registered handlers on the current node 

Preventing a browser from using a built-in handler for an event can be done using the preventDefault() method
*/

// Example of preventDefault() method
let passwordInput = document.querySelector("#password");
passwordInput.addEventListener("keydown", preventSpaces);
passwordInput.addEventListener("input", checkPassword);

function preventSpaces(event) {
    // Ignore space input
    if (event.key === " ") {
        event.preventDefault();
    }
}

function checkPassword() {
    let password = this.value;
    let passwordStrength = 0;

    if (password.length >= 6) {
        passwordStrength++;
    }
    if (password.toLowerCase() !== password) {
        passwordStrength++;
    }
    let containsDigit = false
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 0 && password[i] <= "9") {
            containsDigit = true;
        }
    }
    if (containsDigit) {
        passwordStrength++;
    }
}

// Timers

/* A timer is a general name for techniques to execute JavaScript code after some amount of time has occured */

// setTimeout() method takes two arguments: a function and a delay in milliseconds
let timerId = setTimeout(showSpecial, 3000);

function showSpecial() {
    let special = document.getElementById("special");
    special.style.display = "block";
    setTimeout(hideSpecial, 10000); // Hides the special after 10 seconds
}

function hideSpecial() {
    let special = document.getElementById("special");
    special.style.display = "none";
}
// clearTimeout() method cancels the timeout created by setTimeout() so that it never shows on the screen

// Intervals

/* A web browser is able to execute a function repeatedly with a time delay between calls using setInterval(). The setInterval() method takes two arguments: a function and a time interval in milliseconds */

function startMoving() {
    ballImage = document.getElementById("ball");
    timerId = setInterval(moveBall, 10);
}

function moveBall() {
    let left = parseInt(ballImage.style.left);
    ballImage.style.left = left + 5 + "px";
}
// clearInterval() method cancels the interval

// Modifying CSS with JavaScript

// Modifying an elements inline style 

/* The CSS Object Model is a set of APIs that allow JavaScript to manipulate the CSS properties of a webpage */

let elem = document.getElementById("mydiv");

// The getPropertyValue() method returns the value of an element's CSS property or an empty string if the property is not set
elem.style.getPropertyValue("color") // Gets the element's color value

// The setProperty() method sets the value of an element's CSS property
elem.style.setProperty("color", "blue") // Sets the element's color to blue

// The removeProperty() method removes an element's CSS property
elem.style.removeProperty("color") // Removes the element's color property

// The style CSS properties can alternatively be accessed and modified using JavaScript property names
elem.style.color = "blue"

// CSS property names that have dashes are converted in property names that use camel case
elem.style.backgroundColor // background-color

// Modifying a style sheet

/* The document.styleSheets object is a list of the stylesheets used in the webpage. Each stylesheet in document.stylesheets is a CSSStyleSheet object, which maintains a list of the stylesheet's CSS rules in the property called CSSRules */

// Two CSSStyleSheet methods allow CSS rules to be added or removed

// The insertRule() method inserts a new rule into the stylesheet
document.styleSheets[0].insertRule("p { color: blue; }") // Inserts a new paragraph rule that makes the text color blue

// The deleteRule() method deletes a rule at a given index number from the stylesheet
document.styleSheets[0].deleteRule(0) // Deletes the first rule from the first stylesheet

// CSS properties can be accessed, modified and removed using the same methods that are used when modifying CSS inline
document.styleSheets[0].cssRules[0].style.setProperty("color", "blue")

// Adding and removing classes

/* Every DOM node has a classList property that lists the classes assigned to the node. The div created from <div class="account warning"> has a classList with items "account" and "warning". Methods exist to add and remove classList items */

// The add() method adds a class to the node's classList
elem.classList.add("mystyle") // adds the class mystyle to the element's list of classes

// The remove() method removes a class from the node's classList
elem.classList.remove("mystyle") // removes the class mystyle from the element's list of classes

// The toggle() method adds the class to the node's classList if the class is not present. If the class is already present, the class is removed
elem.classList.toggle("mystyle") // toggles the class mystyle on or off

// A DOM node's classList can also be modified directly using the className property
elem.className = "cat adopted" // Assigns the cat and adopted classes to the element and removes any previously assigned classes from the node
/* All classes assigned to className are also added to the node's classList, using classList as often as possible is best practice */

