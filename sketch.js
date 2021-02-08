const Engine =  Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var hr=hour();
var mn=minute();
var sc=second();
var Angle=  angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  scAngle= map(sc,0,60,0,360)


  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  // drawing seconds hand

  push()

  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight();
  line(0,0,100,0);

  pop()
}