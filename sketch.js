
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeImage,tree;
var boyImage,boy;
var mangoImage,mango;
var stoneImage,stone;

function preload()
{
	treeImage=loadImage("plucking+mangoes/tree.png");
	boyImage=loadImage("Plucking+mangoes/boy.png");
	mangoImage=loadImage("plucking+mangoes/mango.png");
	stoneImage=loadImage("plucking+mangoes/stone.png");

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(600,100,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	Tree.display();
  
  drawSprites();
 
}



