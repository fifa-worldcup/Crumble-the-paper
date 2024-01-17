
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.cirle(45, 165, 60 )

	Engine.run(engine);
  
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  groundObj= new ground(width/2,670,width,20);
  leftSide= new ground(1100,600,20, 120);
  RightSide= new ground(1200,500,10,130)

  drawSprites();
 
}
 function keyPressed(){
	if (keycode === UP_ARROW){
       Matter.Body.applyForce(circle,45, 165, 30)

	}
 }


