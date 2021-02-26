
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1150,80,30);
	mango3=new Mango(900,130,30);
	mango4=new Mango(950,170,30);
	mango5=new Mango(1250,200,30);
	mango6=new Mango(1170,280,30);
	mango7=new Mango(1030,230,30);
	mango8=new Mango(1050,170,30);
	mango9=new Mango(1120,140,30);
	mango10=new Mango(1020,70,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(200,340, 70);

	launcherObject = new Launcher(stoneObj.body,{x:245,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  text("Press Spacebar to take the stone again in your hand", 100, 50);
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObj.display();
  launcherObject.display();

  groundObject.display();

  detectcollision(stoneObj, mango1);
  detectcollision(stoneObj, mango2);
  detectcollision(stoneObj, mango3);
  detectcollision(stoneObj, mango4);
  detectcollision(stoneObj, mango5);
  detectcollision(stoneObj, mango6);
  detectcollision(stoneObj, mango7);
  detectcollision(stoneObj, mango8);
  detectcollision(stoneObj, mango9);
  detectcollision(stoneObj, mango10);

  //keyPressed();
}
function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}

function detectcollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x: 235, y: 420})
	  launcherObject.attach(stoneObj.body);
	}
}