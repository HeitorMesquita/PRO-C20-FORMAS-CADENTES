
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3;
var ground;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	var ground_options ={
		isStatic: true
	  };

	ground = Bodies.rectangle(400,690,800,20,ground_options);
	World.add(world,ground);

	//Crie os Corpos Aqui.
		
	 block1 = Bodies.circle(200,50,30,block1_options);
	 World.add(world,block1);
     
	 block2 = Bodies.rectangle(400,50,100,50,block2_options);
	 World.add(world,block2);

	 block3 = Bodies.rectangle(600,50,100,100,block3_options);
	 World.add(world,block3);

	
  
}


function draw() {
 
  background("lightgreen");

  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(block1.position.x,block1.position.y,30)
  rect(block2.position.x,block2.position.y,100,50);
  rect(block3.position.x,block3.position.y,100,100);
  rect(ground.position.x,ground.position.y,800,20);
}



