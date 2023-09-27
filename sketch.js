function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(' Linen');
  print(millis());
}

function draw() {
  background('LightSkyBlue') 
  let secondsNow = second();
  let myDiameter = (map (secondsNow, 0, 59, 100, height))
  ellipse(width/2, height/2, myDiameter, myDiameter)
}
