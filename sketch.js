var road ,roaodImage,alphaImage,maskImage,sanitizerImage,deltaImage
var gamaImage,boy,boyImage,vaccineImage,madicineImage
var scene,sceneImage,groung

var gameState=0
var score=0
var life=3

function preload(){
    maskImage=loadImage("mask.png")
    roadImage=loadImage("Road.png")
    alphaImage=loadImage("Alpha.png")
    sanitizerImage=loadImage("Sanitizer.png")
    deltaImage=loadImage("Delta.png")
    gamaImage=loadImage("Gama.png")
    vaccineImage=loadImage("Vaccine.png")
    madicineImage=loadImage("Madicines.png")
sceneImage=loadImage("backgroung.jpg")
boyImage=loadImage("Boy2.png")
boyJump=loadImage("boyJump.png")
}

function setup(){
    createCanvas(1000,600)
scene=createSprite(500,300,width,height)
scene.addImage(sceneImage)
scene.scale=3.5
boy=createSprite(100,500,30,30)
boy.addImage(boyImage)
boy.scale=0.2
ground=createSprite(50,500,1000,30)

ground.visible=false
obstaclesGroup=new Group()

}


function draw(){
    background("white")
    if (gameState===0){
        scene.velocityX=-3

        if (scene.x<0){
            scene.x=200
            }
            if (keyWentDown("space")){
                boy.addImage(boyJump)
                boy.scale=0.9
                boy.velocityY=-10
            }
            if (keyWentUp("space")){
                
                boy.addImage(boyImage)
                boy.scale=0.2
            }
            boy.velocityY=boy.velocityY+0.8
            boy.collide(ground)
            spawnObstacles()
    }
    
    drawSprites()
}

function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(600,165,10,40);
      obstacle.velocityX = -(6 + score/100);
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(gamaImage);
                 break;
         case 2: obstacle.addImage(alphaImage);
                 break;
         case 3: obstacle.addImage(deltaImage);
                 break;
         case 4: obstacle.addImage(madicineImage);
                 break;
         case 5: obstacle.addImage(sanitizerImage);
                 break;
         case 6: obstacle.addImage(maskImage);
                 break;
         default: break;

       }
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.15;
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }