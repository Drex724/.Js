function setup() {
  createCanvas(800, 800);
  background("white"); 
}
function draw() {
  if (mouseIsPressed) {
    stroke("red"); //cor da linha
    fill("black"); //cor do fundo
    rect(mouseX,mouseY,800,800);
  }
}
