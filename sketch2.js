var mr, sr;

function setup() {
  createCanvas(1200,800);
  mr = createSprite(400, 100, 50, 80);
  mr.shapeColor = "green";
  mr.debug = true;
  sr = createSprite(400, 800,80,30);
  sr.shapeColor = "green";
  sr.debug = true;

  mr.velocityY = -5;
  sr.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 
  bounceOff(mr,sr);
  drawSprites();
}
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
      }
}