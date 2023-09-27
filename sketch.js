function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('white');
}

let xPos = 0;
let xVelocity = 5;

function draw() {
  background('LightSkyBlue')
  ellipse(xPos,50,50,50);
  
  xPos = xPos + xVelocity;

  if (xPos > width) {
    xVelocity = -5;
  }
  if (xPos < 0) {
    xVelocity = 5;
  }
}
