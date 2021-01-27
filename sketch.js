
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var engine,world;
 var box1,box2,box3;
 var ball;

function setup() {
	createCanvas(800, 200);
	engine = Engine.create();
	world = engine.world;
    
	box1 = createSprite(700,150,50,50)
    box2 = createSprite(750,150,50,50)
	box3 = createSprite(750,150,10,100)
	ball = new Ball(200,height,400,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.Display();
  box2.Display();
  box3.Display();
  drawSprites();
 
}



