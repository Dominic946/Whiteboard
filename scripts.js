// Variables for the canvas and context
var canvas;
var context;
var color;
var penSize;

// Flag for drawing activity
var drawing = false;

function init() {
    // Get the canvas element and set the context
    canvas = document.getElementById("drawing-canvas");
    context = canvas.getContext("2d");

    // Set the canvas dimensions to the size of the window
    canvas.width = window.innerWidth-16;
    canvas.height = window.innerHeight-55;

    // Add event listeners for mouse events
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    // Set default color and size
    penSize = 2;
    color = "black";
}

function startDrawing(event) {


    // Set the drawing flag
    drawing = true;

    // Get the pen penSize
    penSize = document.getElementById("penSize").value;

    // Start a new path
    context.beginPath();

    // Set the starting point of the path
    const rect = canvas.getBoundingClientRect()
    context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
}

function draw(event) {
    if (drawing) {
        // Add a line to the current path
        const rect = canvas.getBoundingClientRect()
        context.lineTo(event.clientX - rect.left, event.clientY - rect.top);

        // Set the line width and color
        context.lineWidth = penSize;
        context.strokeStyle = color;

        // Draw the path
        context.stroke();
    }
}

function stopDrawing() {
    // Clear the drawing flag
    drawing = false;
}

function changeColor() {
  color = event.target.id;
}

function reset() {
  // Set the canvas dimensions to the size of the window
  if(confirm("Erase all?")){
    canvas.width = window.innerWidth-16;
    canvas.height = window.innerHeight-55;
  }
}
