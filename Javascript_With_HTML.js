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

// Validating form input with JavaScript

/* Each textual input element in an HTML document has a value attribute that is associated with the user-entered text. The value attribute can be used to validate user-entered text by checking desired properties, such as:

- Checking for a specific length using the length property on the value attribute
- Checking if entered text is a specific value using ===
- Checking if the text contains a specific value using the string indexOf() method on the value attribute
- Checking if the text is a number using isNaN()
- Checking that text matches a desired pattern using a regular expression and the string match() method


- Drop-down menus also have a value attribute associated with the user-selected menu uption

- Checkboxes and radio buttons have a checked attribute that is a boolean value
*/

let salePriceWidget = document.querySelector("#salePrice");
let errorMsg = document.querySelector("#errorMsg");

errorMsg.innerHTML = "";

if (salePriceWidget.value.length === 0) {
    errorMsg.innerHTML = "Sale price is missing.";
}
else if (isNaN(salePriceWidget.value)) {
    errorMsg.innerHTML = "Please enter a number.";
}
else {
    let salePrice = parseFloat(salePriceWidget.value);
    if (salePrice < 10 || salePrice > 1000) {
        errorMsg.innerHTML = "Must be between $10 and $1000.";
    }
}

// Validating form data upon submission

/* Validating form data using JavaScript that executes when the user submits the form can be performed by:

- Register a handler for the form's submission event that executes a validation function
- Within the validation function, inspect the form's input field via the appropriate DOM elements and element attributes
- If the form is invalid, call the preventDefault() method on the event to cancel the form submission and prevent the form data from being sent to the server
*/

function checkForm(event) {
    let tosWidget = document.querySelector("#tos");

    // Cancel form submission if tos is not checked
    if (!tosWidget.checked) {
        event.preventDefault();
    }
}

let tosForm = document.querySelector("#tosForm");
tosForm.addEventListener("submit", checkForm);

// Validating each field as data is entered

/* Alternatively, form data can be validated as the user enters data in the form by:

- For each field that should be validated:
    - Register an input event handler for the field
    - Create a global variable to track whether the field is currently invalid. In most cases, this global variable should be initialized to false since the form typically starts with the field as invalid
    - Modify the global variable as appropriate within the field's event handler
- Register a submit event handler for the form that verifies the global variables for each field are true
- If one or more of the global variables are false, call the preventDefault() method on the submit event to prevent the form from submitting to the server
*/

let zipCodeValid = false;
let zipCodeWidget = document.querySelector("#zip");
zipCodeWidget.addEventListener("input", checkZipCode);

function checkZipCode() {
    let regex = /^\d\d\d\d\d$/;
    let zip = zipCodeWidget.value.trim();
    zipCodeValid = zip.match(regex);
}

let tosForm = document.querySelector("#tosForm");
tosForm.addEventListener("submit", checkForm);

function checkForm(event) {
    if (!zipCodeValid) {
        event.preventDefault();
    }
}

// Using HTML form validation

/* Various HTML elements allow the browser to do validation without using JavaScript:

- The required attribute indicates that the field must have a value (text or selection) prior to submitting the form
- The max and min attributes indicate the maximum and minimum values respectively that can be entered in an input field with ranges, such as date or number
- The maxlength and minlength attributes indicate the maximum and minimum length of input allowed by an input field
- The pattern attribute provides a regular expression that valid input must match
- The title attribute can be used to provide a description of valid input when using the pattern attribute
*/

/* Several CSS pseudo-classes exist to style input and form elements:

- The :valid pseudo-class is active on an element when the element meets all the stated requirements in field attributes
- The :invalid pseudo-class is active on an element when one or more of the attributes in the field are not fully met
- The :required pseudo-class is active on an element if the element has the required attribute set
- The :optional pseudo-class is active on an element if the element does not have the required attribute set
*/

// Working with JSON (see Introduction.json for basic data types in JSON)

/* JavaScript provides a built-in JSON object that provides two methods for working with JSON */

JSON.parse() // Creates a JavaScript object from a string containing JSON
JSON.parse('[1, "two", null]') // Converts the string '[1, "two", null]' into the JavaScript array [1, "two", null]
// Typically JSON.parse() is used with date received from a server

JSON.stringify() // Creates a string from a JavaScript object
JSON.stringify(new Date('2020-08-06')) // Converts the JavaScript Date object to the string 2020-08-06T00:00:00z by calling the Date object's toJSON() method
// Typically, JSON.stringify() is used with data sent to a server

// Good practice is to use single quotes around JavaScript strings that contain JSON notation so that the double quotes for strings and JSON object names do not need to be escaped. Use '{"name":"Bob"}' instead of "{"name":"Bob"}"

// The JSON.parse() reviver function is used to modify parsed values before being returned, and is helpful when a JSON string represents a data type not available in JSON

// The JSON.stringify() replacer enables customization of the generated string

// The JSON.stringify() spacer controls the indentation spacing of output JSON string, which indicates the depth of values in the object

// XMLHttpRequest (Ajax)

/* Ajax(Asynchronous JavaScript and XML) is a techique to asynchronously communicate with a server and update a web page once the response is received, without reloading the whole webpage

Asynchronous request - When the web application sends a request to the server and continues running without waiting for the server response

XMLHttpRequest - An object for communicating with web servers using Ajax. Allows the web browser to hide the communication latency and continue to provide a responsive user interface while waiting for a server response
*/ 

/* The steps for using the XMLHttpRequest API are:

- Create a new XMLHttpRequest object
- Assign handlers to the desired events via the addEventListener() method. If the handlers are not set up prior to calling the open() method, the progress events will not execute
- Initialize a connection to a remote resource using the open() method. The open() method takes two arguments: the HTTP request type and the URL for the resource
- Modify the default HTTP request headers if needed with the setRequestHeader() method, xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
- Send the HTTP request via the send() method. For POST requests, the data to be sent with the request is passed as the argument to the send() method */

let movieInfo = document.getElementById("movieinfo")
let xhr = XMLHttpRequest();
xhr.addEventListener("load", function() {
    movieInfo.innerHTML = xhr.response;
});
xhr.open("GET", "starwars.html");
xhr.send();

// XMLHttpRequest result handlers

/* Good practice is to use a result handler for each specific result to separate functionality for each Ajax event

The XMLHttpRequest result handlers are:

"load" - Called when the exchange between the browser and server has completed. From the browsers perspective, the server received the request and responded. However, the request might not have been succesful because of a problem such as a non-existent webpage. The HTTP status code must be examined to check what type of response was received. Ex: 200 vs. 404. The load, error, and abort handlers are mutually exclusive and are called after any progress handlers

"error" - Called when the browser does not receive an appropriate response to a request. Ex: The browser is unable to connect to the server, the connection between browser and server is cut in the middle of a response

"abort" - Called when the browser is told to stop a request/response that is still in progress. Ex: The user closes the webpage that made the request

"timeout" - Called if the browser takes too much time to fully receive a response to a request. The timeout is an optional value that can be provided before the request is made. By default, the browser does not provide a timeout for a request

"readystatechange" - Relates to any change in the XMLHttpRequest. When XMLHttpRequest was originally defined, readystatechange was the only handler defined. As a result, many Ajax examples on the internet only use readystatechange and do not include other handlers. Load, error, abort, and timeout are replacements for readystatechange */

// XMLHttpRequest progress handlers

/* XMLHttpRequest progress handlers are:

"loadstart" - Called when the browser begins to send a request. The loadstart handler is called before any other XMLHttpRequest handler

"loadend" - Called after the browser receives the response. The loadend handler is called upon the both response success and failure, and is called after all other XMLHttpRequest handlers

"progress" - Called one or more times while a response is being received by the client. Progress handlers are called before result handlers. The progress handler can be used to provide a data download progress indicator to the user. A similar handler is available to provide an indicator for uploaded data */

// Attributes for determining XMLHttpRequest success

/* The XMLHttpRequest object has attributes for checking the status of a response, which are usually used in the load handler and used to update the DOM

"status" - The numeric code returned in the response

"statusText" - The descriptive text describing the status attribute

Common HTTP response status codes:

200 - HTTP request successful
3XX - General form for request redirection errors
301 - Resource permanently moved, the new URL is provided
4XX - General form for client errors
400 - Bad request. Ex: incorrect request syntax
401 - Unauthorized request. Ex: Not properly authenticated
403 - Request forbidden. Ex: User does not have necessary permissions
404 - Not found. Ex: Requested resource does not exist
5XX - General form for server error codes
500 - Internal server error. Ex: Server-side code crashed
503 - Service unavailable. Ex: Webpage is temporarily unavailable due to site maintenance
*/

// Accessing Ajax response data

/* The XMLHttpRequest object provides multiple ways to access the response data

"response" - The response body, which is parsed by the browser according to the responseType attribute

"responseText" - The plain text version of the response

"responseXML" - The XML DOM version of the response. The responseXML attribute is only available as a DOM object if the response is a valid and correctly formatted XML document

"responseType" - Set by the programmer to let the browser know the expected response data format
    - If the responseType is set to "json", then the browser parses the entire response as a JSON object and sets the response attribute to the JSON object
    - If the responseType attribute is either "" or "text", the browser leaves the response unprocessed, and the response attribute contains the same value as responseText
    - If the responseType attribute is "document", the browser assumes the response is an XML document, and the response attribute contains the same value as responseXML */

let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    let title = document.getElementById("title");
    let queryString = "title=" + encodeURIComponent(title.value); // encodeURI component converts the space characters to %20 and ampersand to %26, the ASCII hex values
    xhr.open("GET", "lookup.php?" + queryString);
    xhr.send();
});

function responseReceivedHandler() {
    let movieInfo = document.getElementById("movieinfo");
    if (this.status === 200) {
        let movie = this.response;
        movieInfo.innerHTML = "<cite>" + movie.title + "</cite>" + movie.rating + ", released in " + movie.year;
    }
    else {
        movieInfo.innerHTML = "Movie data unavailable.";
    }
}

// Monitoring uploads

/* The XMLHttpRequest object's upload attribute is an object for monitoring the status of the request being sent to the server. The upload attribute has the same handlers as the XMLHttpRequest object, but the progress handler is the only handler typically used for the upload attribute. The progress handler can be used to monitor the status of uploading large files, such as attaching a document to a Gmail message */

function uploadProgressHandler(event) {
    if (event.lengthComputable) {
        console.log(event.loaded + "bytes uploaded out of " + event.total + " bytes total.");
    }
}

let file = document.getElementById("file_widget").files[0];
let xhr = new XMLHttpRequest();
xhr.upload.addEventListener("progress", uploadProgressHandler);
xhr.open("POST", "http://www.example.org/example.html");
xhr.setRequestHeader("Content-Type", file.type);
xhr.send(file);

// Using third-party web APIs (JavaScript)

/* A third-party web API is a public web API used by a webapplication to access data provided by a third party. To use a third-party web API, a developer usually registers with the third-party to obtain an API key.

Third parties requires API keys for several reasons: 

- The API key identifies who or what application is using the web API
- The API key helps the third party limit the number of requests made to the API in a fixed time period or may be used to charge a developer a fee for additional requests
- To obtain an API key, developers must agree to restrictions the third party places on data obtained from the web API */

/* Most third-party web APIs are RESTful. A RESTful web API is a web API that is called with a URL that specifies API parameters and returns JSON or XML containing the API data. Ex: The URL http://linkedin.com/api/article?id=123 specifies the article ID 123, so the article would be returned formatted in JSON */

/* A SOAP-based web API is another type of web API that relies heavily on XML and is in general more complex to use than RESTful web APIs */

// Third-party web APIs may be called from the web server or the web browser. This shows how to call web APIs from the web browser using JavaScript

