var control,experiment
function setup(){
    createCanvas(800,400);
    control = crateSprite(700,300,25,25);
    experiment = createSprite(100,300,25,25);
}

function draw(){
    if(frameCount%60===0){
        control.velocityX = randomNumber(-4,4);
        control.velocityY = randomNumber(-2,2);
    }
    createEdgeSprites();
    if(control.isTouching(edges)){
        control.velocityX = -(control.velocityX);
        control.velocityY = -(control.velocityY);
    }
    experiment.x = World.mouseX;
    experiment.y = World.mouseY;
    drawSprites();
}