var mrect,srect;
var ob1,ob2,ob3,ob4
function setup() {
  createCanvas(800,400);
  mrect = createSprite(100,200,50,50);
  mrect.shapeColor = "red";

  srect = createSprite(400,200,50,50);
  srect.shapeColor = rgb(15,252,181);
  ob1 = createSprite(100,100,30,30);
  ob1.shapeColor = "black"
  ob2 = createSprite(200,100,30,30);
  ob2.shapeColor = "blue"
  ob3 = createSprite(300,100,30,30);
  ob3.shapeColor = "green";
  ob4 = createSprite(400,100,30,30);
  ob4.shapeColor = rgb(35,47,254);
}

function draw() {
  background(255,255,255); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  if(isTouching(ob1,mrect)){
    mrect.shapeColor = rgb(15,252,181);
    ob1.shapeColor = "red";
  } else{
    mrect.shapeColor = "red";
    ob1.shapeColor = "black"; 
  }
  drawSprites();
}
function isTouching(object1,object2) {
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.width/2+object2.width/2
    && object2.y-object1.y<object2.width/2+object1.width/2){
    return true;
  }
 else{
   return false
 }
}