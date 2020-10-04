
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(700, 100);
	bob2 = new Bob(250, 100);
	bob3 = new Bob(300, 100);
	bob4 = new Bob(350, 100);
	bob5 = new Bob(400, 100);

	roof = new Roof(370, 100, 300);

	string1 = new String(bob1.body, roof.body, -100, 0);
	string2 = new String(bob2.body, roof.body, -50, 0);
	string3 = new String(bob3.body, roof.body, 0, 0);
	string4 = new String(bob4.body, roof.body, 50, 0);
	string5 = new String(bob5.body, roof.body, 100, 0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body, bob1.body.position ,{x: 15, y: 25});
  }

  //display the bodies
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display(); 
  bob1.display(0, 255, 255);
  bob2.display(0, 115, 255);
  bob3.display(0, 0, 255);
  bob4.display(200, 0, 255);
  bob5.display(255, 0, 255);
  roof.display();
  

}

function mouseDragged(){
	Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}

