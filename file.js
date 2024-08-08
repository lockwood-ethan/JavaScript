// alert("Click OK or press Enter");

let list = document.getElementById("strikeList");

// Register handler for event bubbling phase
list.addEventListener("mouseover", function(e) {
    e.target.style.color = "red";
});

// Register handler for event capturing phase
list.addEventListener("mouseout", function(e) {
    e.target.style.color = "black";
}, true);

// list.addEventListener("click", function(c) {
//     window.open("https://www.twitch.tv/")
// });

let myDiv = document.getElementById("mydiv");
let width = myDiv.style.getPropertyValue("width");
width = parseInt(width) + 100;
myDiv.style.setProperty("width", width + "px");
myDiv.style.setProperty("background-color", "red");
myDiv.style.removeProperty("width");
myDiv.addEventListener("mouseover", function(m) {
    m.target.style.color = "green";
});
myDiv.addEventListener("mouseout", function(m) {
    m.target.style.color = "red";
})