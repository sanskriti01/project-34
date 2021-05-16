const Engine = Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var ground, hero, attach;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(900, 400);
  
  engine = Engine.create();
 // world = Engine.world();


  ground = new Ground(200,400,600,5);
  hero = new Hero(400,3,100,100)
  attach = new Throw(hero.body, {x:100, y:465});
  block1 = new Block(280, 350, 30, 40)
  block2 = new Block(310, 350, 30, 40)
  block3 = new Block(340, 350, 30, 40)
  block4 = new Block(370, 350, 30, 40)
  block5 = new Block(400, 350, 30, 40)
  block6 = new Block(430, 350, 30, 40)
  block7 = new Block(460, 350, 30, 40)
  block8 = new Block(490, 350, 30, 40)
  block9 = new Block(310, 315, 30, 40)
  block10 = new Block(310, 315, 30, 40)
  block11 = new Block(370, 315, 30, 40)
  block12 = new Block(400, 315, 30, 40)
  block13 = new Block(430, 315, 30, 40)
  block14 = new Block(460, 315, 30, 40)
  block15 = new Block(490, 315, 30, 40)
  monster = new Monster(380,200,100,100)






}

function draw() {
  rectMode(CENTER);

  ground.display();
  hero.display();
  attach.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  monster.display();


}
function mouseDragged(){
  Matter.Body.setPosition(Hero.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  attach.fly();
}

