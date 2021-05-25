
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new roof(425,100,550,50);
	
	bob1 = new bob(225,400,50);

	bob2 = new bob(325,400,50);

	bob3 = new bob(425,400,50);

	bob4 = new bob(525,400,50);

	bob5 = new bob(625,400,50);


	chain1 = new chain(bob1.body,roof.body,-200,0);

	chain2 = new chain(bob2.body,roof.body,-100,0);

	chain3 = new chain(bob3.body,roof.body,0,0);

	chain4 = new chain(bob4.body,roof.body,100,0);

	chain5 = new chain(bob5.body,roof.body,200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  
  drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -500, y:-500});
	}
}
