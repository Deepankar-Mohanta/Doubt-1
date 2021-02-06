const World= Matter.World;
const Engine=Matter.Engine;
const MouseConstraint=Matter.MouseConstraint;
const Constraint= Matter.Constraint;
const Bodies= Matter.Bodies;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var bgimg;
var canvas;

function setup(){

     canvas=createCanvas(1000, 700)

    engine=Engine.create();
    world=engine.world;

    
    pendulum1=new Pendulum(300, 500, "black")
    pendulum2=new Pendulum(400, 500, "black")
    pendulum3=new Pendulum(500, 500, "black")
    pendulum4=new Pendulum(600, 500, "black")
    pendulum5=new Pendulum(700, 500, "black")

    sling1=new Sling(pendulum1.body, {x:300, y:100});

}

function draw(){
Engine.update(engine)
background('black')
fill('white')
pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
sling1.display()
}

function mouseDragged(){

}