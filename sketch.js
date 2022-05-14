var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,20,20)
}

function draw() 
{
  background("yellow");

 if (keyDown("right")){
   background("red")
 }
  drawSprites();
}




