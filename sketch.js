const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var engine, world;
var backgroundimg;
var tower;
var cannon;
var cannonball;
var balls=[]


function preload() {
  backgroundimg = loadImage("images/background.gif");
}
function setup() {
  var canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 590, 1200, 10);
  tower = new Tower(130, 370, 150, 300);
  cannon =new Cannon(190,180,150,120,-PI/4)
  
}

function draw() {
  background(0);
  image(backgroundimg, 0, 0, 1200, 600);
  ground.display();
  tower.display();
  cannon.display();
  for(var i=0;i<balls.length;i++)
{
  showCannonballs(balls[i])
}

  Engine.update(engine);
}
function keyPressed(){
  if(keyCode==DOWN_ARROW){
    var cannonball
    cannonball=new Cannonball(cannon.x,cannon.y,25,25)
    balls.push (cannonball)
      }
}
function keyReleased(){
  if(keyCode==DOWN_ARROW){
    console.log("high")
  balls[balls.length-1].launch()

  }
}
function showCannonballs(b) {
b.display()
}