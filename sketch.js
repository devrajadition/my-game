var pc,pcimg
var door ,doorimg
var house,houseimg
var lives=3 
var gamestate="play" 
//var bg , bgimg

function preload(){
pcimg=loadImage("imgz/pc.png");
doorimg=loadImage("imgz/door.png");
houseimg=loadImage("imgz/house.jpg");
//bgimg=loadImage("imgz/bg.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

//bg=createSprite(200,200,10,10);
//bg.addImage(bgimg)

 house=createSprite(700,350,10,10);
 house.addImage(houseimg);
 house.scale=0.88

 door=createSprite(713,580,10,10);
 door.addImage(doorimg);
 door.scale=0.3

 pc= createSprite(713,580, 10, 10);
 pc.addImage(pcimg);
 pc.scale=0.2;
 pc.debug=true
 pc.setCollider("rectangle",0,0,200,250)
  //displayWidth-200,displayHeight-200(pc position)
 ghost1=createSprite(100,50,20,20)
  ghost1.velocityY=50
  restart=createSprite(width/2,height/2)
}

function draw() {
  background(255,255,255);  
  textSize (20)
  text ("health:"+lives,width-100,30)
  if(gamestate==="play"){

  
  if(keyDown('a')){
  pc.x=pc.x-3
  }
  if(keyDown("d")){
    pc.x=pc.x+3
  }
  if (keyDown("w")){
    pc.y=pc.y-3
  }
  if(keyDown("s")){
    pc.y=pc.y+3
  }
  if(pc.isTouching (door )){
    door.visible=false
    house.visible=false
    maze()
  }
  if(pc.isTouching (wall1)||pc.isTouching(wall2)||pc.isTouching(wall3)||pc.isTouching(wall4)||pc.isTouching(wall5)||pc.isTouching(wall6)){
    pc.x=width/2
     console.log("not work")
    pc.y=height/2
    lives=lives-1
  }
  if (lives===0){
   
   
    pc.destroy()
    gamestate="end"
  }
 edges = createEdgeSprites()
 ghost1.bounceOff(edges)
}
else if(gamestate=="end"){
  background(0)
  textSize(200)
  stroke (255)
  text("GAME OVER" , 200 , height/2 +100)
  if(mousePressedOver(restart)){
    restart()
  }
}
  drawSprites();
}
function maze(){
  wall1=createSprite(1000,3,2000,10);
  wall1.shapeColor="black"

  wall2=createSprite(3,200,10,2000);
  wall2.shapeColor="black"
  wall3=createSprite(1518,350,10,2000);
  wall3.shapeColor="black"
  wall4=createSprite(1000,860,2000,10);
wall4.shapeColor="black"
wall5=createSprite(850,520,500,10);
wall5.shapeColor="black"
wall6=createSprite(650,630,300,10);
wall6.shapeColor="black"
 wall7=createSprite(505,500,10,260);
 wall7.shapeColor="black"
 wall8=createSprite(505,210,10,150);
 wall8.shapeColor="black"
 wall9=createSprite(600,210,10,150);
 wall9.shapeColor="black"
 wall1a=createSprite(600,447,10,155);
 wall1a.shapeColor="black"
 wall2a=createSprite(700,374,200,10);
 wall2a.shapeColor="black"
 wall3a=createSprite(800,395,10,50);
 wall3a.shapeColor="black"
 wall4a=createSprite(1055,420,520,10);
 wall4a.shapeColor="black"
 wall5a=createSprite(1170,590,10,350);
 wall5a.shapeColor="black"
 wall6a=createSprite(1095,770,10,500);
 wall6a.shapeColor="black"
 wall7a=createSprite(1245,770,10,500);
 wall7a.shapeColor="black"
 wall8a=createSprite(1320,590,10,350);
 wall8a.shapeColor="black"
 wall9a=createSprite(1410,430,30,670);
 wall9a.shapeColor="black"
 wall1b=createSprite(1150,330,500,10);
 wall1b.shapeColor="black"
 wall2b=createSprite(900,310,10,50);
 wall2b.shapeColor="black"
 wall3b=createSprite(790,290,210,10);
 wall3b.shapeColor="black"
 wall4b=createSprite(690,330,10,90);
 wall4b.shapeColor="black"
 wall5b=createSprite(1290,50,40,40);
 wall6b=createSprite(1190,50,40,40);
 wall7b=createSprite(1290,180,40,40);
 wall8b=createSprite(1190,180,40,40);
 wall9b=createSprite(1150,270,400,40);
 wall1c=createSprite(1090,50,40,40);
 wall2c=createSprite(1090,180,40,40);
 wall3c=createSprite(990,50,40,40);
 wall4c=createSprite(990,180,40,40);
 wall5c=createSprite(890,50,40,40);
 wall6c=createSprite(890,180,40,40);
 wall7c=createSprite(790,50,40,40);
 wall8c=createSprite(790,180,40,40);
 wall9c=createSprite(690,50,40,40);
 wall1d=createSprite(690,180,40,40);
 wall2d=createSprite(590,50,40,40);
 //wall3d=createSprite(490,50,40,40);
 wall4d=createSprite(990,570,40,40);
 wall5d=createSprite(890,570,40,40);
 wall6d=createSprite(990,670,40,40);
 wall7d=createSprite(890,670,40,40);
 wall8d=createSprite(990,770,40,40);
 wall9d=createSprite(890,770,40,40);
 wall1e=createSprite(200,100,500,10);
 wall1e.shapeColor="black"
 wall2e=createSprite(550,720,500,10);
 wall2e.shapeColor="black"
 wall3e=createSprite(550,810,500,10);
 wall3e.shapeColor="black"
 wall4e=createSprite(450,115,10,40);
 wall4e.shapeColor="black"
 wall5e=createSprite(520,140,150,10);
 wall5e.shapeColor="black"
 wall6e=createSprite(420,430,10,410);
 wall6e.shapeColor="black"
 wall7e=createSprite(350,430,10,410);

}

  
  function restart(){
    pc.x=713
    pc.y=580

  }

