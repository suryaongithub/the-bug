const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var boxes,ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

boxes = new Box(5,5,{x:200,y:200});

ground = new Ground(200,395,400,5);




  
   
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  boxes.show();
  ground.show();
 
}

