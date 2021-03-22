//nameSpaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variables
var engine,world;
var thunder,thunder1,thunder2,thunder3,thunder4;
var BG;
var sound;
//multiArray
var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame = 0;

function preload(){
    //load Images and sound
    BG = loadImage("BG.jpg");
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    sound = loadSound("rain.mp3");
}

function setup(){
    //create and add engine to the world
   engine = Engine.create();
   world = engine.world;

   //create canvas
   createCanvas(400,600);

    sound.loop();

   // create umbrella
   umbrella = new Umbrella(200,400);

   //random raindrops
   if(frameCount%150===0){
      for(var i = 0; i<maxDrops;i++)
      drops.push(new createDrop(random(0,400),random(0,400)));
   }
    
}

function draw(){

    //update engine
    Engine.update(engine);
    background(BG);

    //random lightning
    rand = Math.round(random(1.4))
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount
        thunder = createSprite(random(10,270),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1)
                break;
            case 2: thunder.addImage(thunder2)
                break;
            case 3: thunder.addImage(thunder3)
                break;
            case 4: thunder.addImage(thunder4)
                break;
                default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    for(var i = 0; i<maxDrops ; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    umbrella.display();
    drawSprites();
}   

