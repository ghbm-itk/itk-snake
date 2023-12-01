input_chars = "";
SCAN = "1649666549485316677150495348167882744967";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function keyPressed() {
  input_chars += keyCode;
  if (input_chars.endsWith(SCAN)) {
    console.log("Hurra");
    input_chars = "";
  }
}
