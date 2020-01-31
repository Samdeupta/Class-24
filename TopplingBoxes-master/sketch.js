const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(850,340);
    box2 = new Box(750,340);
    box3 = new Box(860,305);
    box4 = new Box(740,305);
    box5 = new Box (800,265);

    ground = new Ground(600,390,1200,20)

    pig1 = new Pig(800,350);
    pig2 = new Pig(800,305);

    log1 = new Log(800,310,180,10,PI);
    log2 = new Log(800,275,180,10,PI);
    log3 = new Log(830,210,100,10,PI/4);
    log4 = new Log(790,210,100,10,-(PI/4));
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();
}