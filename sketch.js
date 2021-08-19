var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
var redballoon;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  pink_balloonImage=loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //change the value of the random balloon to 4 
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: redBalloon();
    break;
    case 2:blueBalloon();
    break;
    case 3:pinkBalloon();
    break;
    case 4:greenBalloon();
break;

  }}  
  
 
  drawSprites();
  textSize=20;
  text("Score:"+score,270,30);
  
     
}


// Creating  arrows for bow
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  redballon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redballon.addImage(red_balloonImage);
  redballon.velocityX = 3;
  redballon.lifetime = 150;
  redballon.scale = 0.05;

}

function blueBalloon() {
  blueballon=createSprite(0,Math.round(random(20, 370)),20,20);
  blueballon.addImage(blue_balloonImage);
  blueballon.velocityX=3;
  blueballon.scale=0.05;
  blueballon.lifetime=150;
  //createSprite for the balloon 
  //addImage for the  balloon
  //add velocity to make the balloon move
  //change the scale of the balloon
  //add the lifetime of the balloon}
}
function greenBalloon() {
  greenballoon=createSprite(0,Math.round(random(20, 370)),20,20);
  greenballoon.addImage(green_balloonImage);
  greenballoon.velocityX=4;
  greenballoon.scale=0.05;
  greenballoon.lifetime=150;
  //createSprite for the balloon 
  //addImage for the  balloon
  //add velocity to make the balloon move
  //change the scale of the balloon
  //add the lifetime of the balloon}
}
function pinkBalloon() {
pinkballoon=createSprite(0,Math.round(random(20, 370)),20,20);
pinkballoon.addImage(pink_balloonImage);
pinkballoon.velocityX=6;
pinkballoon.scale=0.5;
pinkballoon.lifetime=100;
  //createSprite for the balloon 
  //addImage for the  balloon
  //add velocity to make the balloon move
  //change the scale of the balloon
  //add the lifetime of the balloon 
}