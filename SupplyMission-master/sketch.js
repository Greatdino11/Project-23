var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1body, box2body, box3body,box1sprite, box2sprite, box3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	var box_options = {
		isStatic: true
	}
	box1body = Bodies.rectangle(190,665,200,20,box_options);
	World.add(world,box1body);
	box2body = Bodies.rectangle(100,605,20,100,box_options);
	World.add(world,box2body);
	box3body = Bodies.rectangle(310,610,20,100,box_options);
	World.add(world,box3body);
	box1sprite = createSprite(390,660,200,20);
	box1sprite.shapeColor = 'red';
	box2sprite = createSprite(300,600,20,100);
	box2sprite.shapeColor = 'red';
	box3sprite = createSprite(500,610,20,120);
	box3sprite.shapeColor = 'red';
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



