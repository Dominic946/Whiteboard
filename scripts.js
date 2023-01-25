// Variables for the canvas and context
var canvas;
var context;

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

    // Add event listeners for window resize
    window.addEventListener("resize", resizeCanvas);
}

function startDrawing(event) {
    // Set the drawing flag
    drawing = true;

    // Start a new path
    context.beginPath();

    // Set the starting point of the path
    context.moveTo(event.clientX, event.clientY);
}

function draw(event) {
    if (drawing) {
        // Add a line to the current path
        context.lineTo(event.clientX, event.clientY);

        // Set the line width and color
        context.lineWidth = 2;
        context.strokeStyle = "black";

        // Draw the path
        context.stroke();
    }
}

function stopDrawing() {
    // Clear the drawing flag
    drawing = false;
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
