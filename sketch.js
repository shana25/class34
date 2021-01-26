const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground,ball,rope


function setup()
{
    var canvas = createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height-30,1200,20);

    box1 = new Box(700,360,60,60);
    box2 = new Box(700,360,60,60);
    box3 = new Box(700,360,60,60);
    box4 = new Box(700,360,60,60);
    box5 = new Box(700,360,60,60);
    box6 = new Box(700,360,60,60);
    box7 = new Box(700,360,60,60);
    box8 = new Box(700,360,60,60);

    
    box9  = new Box(800,240,60,60);
    box10 = new Box(800,240,60,60);
    box11 = new Box(800,240,60,60);
    box12 = new Box(800,240,60,60);
    box13 = new Box(800,240,60,60);
    box14 = new Box(800,240,60,60);
    
    
    box15 = new Box(900,120,60,60);
    box16 = new Box(900,120,60,60);
    box17 = new Box(900,120,60,60);
    box18 = new Box(900,120,60,60);
    box19 = new Box(900,120,60,60);
    box20 = new Box(900,120,60,60);

    ball  = new Ball(200,200,50);

    rope = new Rope(ball.body,{x:500,y:100});

}

function draw()
{
    background(220);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
  
   ball.display();
   rope.display();
  
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}