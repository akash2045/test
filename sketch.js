var a = prompt("entre a value")
var b = prompt("entre a value")
function setup() {
  createCanvas(400, 400);

 var button = createButton("swap")
 button.mousePressed (swap)
}
function draw() {
  background(220);
}
function swap(){
  [a,b] = [b,a]
  consol.log("value of a:"+a)
  consol.log("value of b:"+b)
}