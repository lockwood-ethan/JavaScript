/* The <canvas> element defines a rectangular area of a webpage where shapes, images, and text can be displayed using JavaScript */

// <canvas id="myCanvas" width="300" height="100" style="border: 1px solid black"></canvas>

// (0,0) is the canvas origin and it starts in the upper left corner

/* The canvas context object represents the drawing surface of the canvas. The 2D context is used for drawing two dimensional graphics. The context defines numerous methods for drawing text, lines, shapes, images, gradients, and shadows */

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.fillStyle = "orange";
context.fillRect = (5, 10, 200, 75); // First two parameters specify the top-left coordinate on the canvas, last two specify the rectangle's width and height in pixels

context.strokeStyle = "royalblue";
context.lineWidth = 6;
context.strokeRect(120, 30, 100, 40);

/* Rectangle methods and properties

fillRect(x, y, width, height) - Draw a rectangle with top left corner at (x, y)

fillStyle - Interior color of filled rectangle

lineWidth - Outline width of stroked rectangle

strokeRect(x, y, width, height) - Draw a stroked(outlined) rectangle with top-left corner at (x, y)

strokeStyle - Outline color of stroked rectangle */

/* Drawing lines and shapes with paths */

context.beginPath(); // Creates a new path
context.moveTo(50, 90); // Defines the path's starting point at coordinate
context.lineTo(100, 10); // Adds a line to the path from the last point to a point at coordinate
context.lineTo(150,90);
context.closePath(); // Adds a line from the current point to the path's starting point
context.fillStyle = "yellow";
context.fill();
context.strokeStyle = "red";
context.lineWidth = 3;
context.stroke();

/* Drawing arcs and circles

The context method arc() adds an arc to a path when given the following parameters:

x - Center's x coordinate
y - Center's y coordinate
radius - Arc's radius
startAngle - Angle in radians where the arc begins, measured clockwise from the positive x axis
endAngle - Angle in radians where the arc ends, measured clockwise from the positive x axis
antiClockwise - Optional boolean parameter that causes the arc to be drawn counter-clockwise between the 2 angles when true. By default the arc is drawn clockwise */

context.beginPath();
context.arc(50, 50, 30, Math.PI, 0);
context.fillStyle = "aquamarine";
context.fill();

context.beginPath();
context.arc(150, 50, 30, Math.PI, 0, true);
context.stroke();

// Convert degrees to radians: radians = Math.PI/180 * degrees

/* Drawing images 

The context method drawImage() draws an image object with the image's top-left corner anchored at the given (x, y) coordinate. Optional width and height arguments draw the image with the given dimensions */

window.addEventListener("load", draw);

let image = document.getElementById("dogImg");

function draw() {
    context.drawImage(image, 500, 200); // 500 pixels from top, 200 from left
    context.drawImage(image, 300, 20, 70, 100); // width 70, height 100
}

/* Drawing text

The context method fillText() draws filled text on a canvas. The strokeText() method draws the outline of text. These methods draw the given text beginning at the given bottom-left (x, y) coordinate

textAlign - Changes the text's horizontal alignment (left, center, right)
textBaseline - Changes the text's baseline (bottom, middle, top)
font - Sets the text's font style, size, and typeface */

context.font = "italic 24pt Courier New";
context.fillStyle = "red";
context.fillText("Red text", 150, 250);

context.font = "bold 30pt Arial";
context.textAlign = "center";
context.strokeStyle = "navy";
context.lineWidth = 2;
context.strokeText("Navy text", canvas.width / 2, 150)

context.font = "12pt Verdana";
context.textAlign = "right";
context.textBaseline = "top";
context.fillStyle = "green";
context.fillText("Green text", canvas.width, 50);

/* Transformations

A transformation is a graphical operation that alters the position, shape, or orientation of an object. The canvas' context supports 3 common transform operations

Translation - Moving the canvas' origin to another location to draw a graph at a different location
Rotation - Rotating the canvas to draw a graphic at an angle
Scaling - Increasing or decreasing the canvas' grid to draw a graphic larger or smaller */

// Translate
context.beginPath();
context.arc(50, 50, 30, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();

context.beginPath();
context.translate(0, 80);
context.arc(50, 50, 30, 0, 2 * Math.PI);
context.fillStyle = "yellow";
context.fill();

context.beginPath();
context.translate(0, 80);
context.arc(50, 50, 30, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();

context.fillStyle = "royalblue";
context.fillRect(100, 0, 100, 100);

//Rotate
// Rotate clockwise 18 degrees
context.rotate(Math.PI / 10);

context.fillStyle = "orange";
context.fillRect(100, 0, 100, 100);

// Rotate clockwise 18 degrees
context.rotate(Math.PI / 10);

context.fillStyle = "indianred";
context.fillRect(100, 0, 100, 100);

// Scale
// Violet square
context.fillStyle = "violet";
context.fillRect(5, 20, 50, 50);

// Double x values, halve y values
context.scale(2, 0.5);

// Blue square appears wider and shorter
context.fillStyle = "blue";
context.fillRect(5, 20, 50, 50);

/* Animation

