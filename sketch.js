var PLAY = 1;
var END = 0;
var gameState = PLAY;


var Ghost, Door,   Climber, Tower
var Ghost1, Door1, Climber1, Tower1


function preload(){
  
Ghost1 = loadImage("ghost-standing.png")
Door1 = loadImage("door.png")
Tower1 = loadImage("tower.png")
Climber1 = loadImage("climber.png") 
Spooky= loadSound("spooky.wav")
  
}

function setup(){
createCanvas(800,600)

Tower = createSprite(300,600) 
Tower.addImage("Tower", Tower1) 

Door = createSprite(100,200) 
Door.visible=false
  
Ghost = createSprite(300,300) 
Ghost.addImage("Ghost", Ghost1) 
  
Ghost.setCollider("rectangle",0,0,Ghost.width,Ghost.height);
}

function draw(){
Ghost.scale=0.5
if(gameState === PLAY){
Tower.velocityY=4
if(Tower.y>500){
Tower.y=Tower.width/2
}
spawnDoors();

if(keyDown("left")){
Ghost.velocityX=-3
}
if(keyWentUp("left")){
Ghost.velocityX=0
}
if(keyDown("Right")){
Ghost.velocityX=3
}
if(keyWentUp("Right")){
Ghost.velocityX=0
}
if(keyDown("up")){
Ghost.velocityY=-3
}
if(keyWentUp("up")){
Ghost.velocityY=0
}
if(keyDown("down")){
Ghost.velocityY=4
}
if(keyWentUp("Down")){
Ghost.velocityY=0
}
 if(Ghost.isTouching(Door)){gameState=END
}}
else if (gameState===END){
Ghost.X=0
Ghost.Y=0
Tower.Y=0
Door.Y=0
Climber.Y=0
Ghost.VelocityX=0
Ghost.VelocityY=0
Tower.velocityY=0
Door.velocityY=0
Climber.velocityY=0

}


drawSprites ();

}
function spawnDoors(){
if(frameCount%80 ===0 ){
Door = createSprite(100,200) 
Door.x=Math.round(random (100,400))
Door.addImage("Door", Door1)

Climber = createSprite(100,250) 
Climber.addImage("Climber", Climber1) 

Climber.x=Door.x
Door.velocityY=4
Climber.velocityY=Door.velocityY

}

}
