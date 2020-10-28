var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
  
}



function setup() {
  background(220);
  createCanvas(600,600);
  
  monkey = createSprite(250,250,30,30);
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,100000000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   
}


function draw() {
   background(220);
  createEdgeSprites();
  
    monkey.velocityY = monkey.velocityY+0.8;
  
  
  
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
    }
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+0,50,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime"+survivalTime,300,50)
  
  
  monkey.collide(ground);

 
   spawnObstacles()
  obstacle;
    obstacleGroup = createGroup;
  bananaGroup = createGroup;
   banana();
  drawSprites();
  
}

function banana(){
  if(World.frameCount%80 === 0){
    var banana  = createSprite(500,120,20,20);
    banana.addImage("moving",bananaImage);
    banana.y=Math.round(random(100,300));
  banana.velocityX=-8;
    banana.setLifetime=50;
    banana.scale = 0.1;
 
      
      
      
    }
  
 
  
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(320,350,10,40);
   
     
    //generate random obstacles
    var rand = Math.round(random(100,300));
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 1;
    obstacle.lifetime = 150;
   
   obstacle.collide(ground);
   
   
    
 }
}

