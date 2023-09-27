function setup() {
  createCanvas(windowWidth, windowHeight);
  background('gold')
  fill(0);

}

function draw() {
}

function mouseClicked() {
  fill(
    random(0,600),random(0,600),random(0,600));
    rect(mouseX, mouseY, 80, 80)
}

function keyPressed() {
  if(key == 's') {
  saveCanvas('myCanvas', '.jpg');
  } else if (key == 'r'){
  background('gold')
}
}

function mouseDragged(){
  stroke(0)
  line(0,0, mouseX, mouseY)
}