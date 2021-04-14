const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground,paper;

function preload(){
}

function setup() {
	
	
	var canvas = createCanvas(1400, 580);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	ground= new Ground(700,550,1400,30);
	
	paper= new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	dustbin.display();
	ground.display();
	paper.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}





