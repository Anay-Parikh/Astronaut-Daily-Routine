var brushImg, issImg, sleepImg;
var firstBath, secondBath;
var firstDrink, secondDrink;
var firstEat, secondEat;
var firstGym, secondGym, thirdGym, fourthGym;
var firstMove, secondMove;

var bath, drink, eat, gym1, gym2, iss, move;
var person;

function preload() {
  brushImg = loadImage("./Images/brush.png");
  issImg = loadImage("./Images/iss.png");
  sleepImg = loadImage("./Images/sleep.png");

  firstBath = loadImage("./Images/bath1.png");
  secondBath = loadImage("./Images/bath2.png");

  firstDrink = loadImage("./Images/drink1.png");
  secondDrink = loadImage("./Images/drink2.png");

  firstEat = loadImage("./Images/eat1.png");
  secondEat = loadImage("./Images/eat2.png");

  firstGym = loadImage("./Images/gym1.png");
  secondGym = loadImage("./Images/gym2.png");
  thirdGym = loadImage("./Images/gym11.png");
  fourthGym = loadImage("./Images/gym12.png");

  firstMove = loadImage("./Images/move.png");
  secondMove = loadImage("./Images/move1.png");
  
  bath = loadAnimation(firstBath, secondBath);
  drink = loadAnimation(firstDrink, secondDrink);
  eat = loadAnimation(firstEat, secondEat);
  gym1 = loadAnimation(firstGym, secondGym);
  gym2 = loadAnimation(thirdGym, fourthGym);
  move = loadAnimation(firstMove, secondMove);

}

function setup() {
  createCanvas(800, 600);
  background("black")

  iss = createSprite(400, 300, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.175

  person = createSprite(400, 350, 50, 50);
  person.addImage("brush", brushImg);
  person.addImage("sleep", sleepImg);
  person.addAnimation("eating", eat);
  person.addAnimation("drinking", drink);
  person.addAnimation("bathing", bath);
  person.addAnimation("exerciseOne", gym1);
  person.addAnimation("exerciseTwo", gym2);
  person.addAnimation("moving", move);
  person.scale = 0.15
  
  person.changeImage("sleep");
}

function draw() {
  background(255, 255, 255);  
  drawSprites();
  frameRate(10);

  person.debug = true;
  person.setCollider("rectangle", -100, -75, 1750, 2200);

  topEdge = createSprite(400, 10, 800, 10)
  topEdge.visible = 0;
  bottomEdge = createSprite(400, 590, 800, 10)
  bottomEdge.visible = 0;
  rightEdge = createSprite(10, 400, 10, 800)
  rightEdge.visible = 0;
  leftEdge = createSprite(790, 400, 10, 800)
  leftEdge.visible = 0;

  person.bounceOff(topEdge);  
  person.bounceOff(bottomEdge);  
  person.bounceOff(rightEdge);  
  person.bounceOff(leftEdge);  

  textSize(30);
  noStroke(); 
  fill("white");
  text("Instructions: ", 30, 40);
  
  textSize(20);
  text("Up Arrow = Brushing", 30, 70);
  text("F key = Exercise 1", 30, 90);
  text("H key = Exercise 1", 30, 110);
  text("Left Arrow = Eating", 30, 130);
  text("Right Arrow = Bathing", 30, 150);
  text("Down Arrow = Moving", 30, 170);

  if (keyDown("UP")) {
    person.velocityX = 0;
    person.velocityY = 0;
    person.changeImage("brush");
    person.x = 400;
    person.y = 300; 
  } else if (keyDown("F")) {
    person.velocityX = 0;
    person.velocityY = 0;
    person.changeAnimation("exerciseOne");
    person.x = 400;
    person.y = 300; 
  } else if (keyDown("H")) {
    person.velocityX = 0;
    person.velocityY = 0;
    person.changeAnimation("exerciseTwo");
    person.x = 400;
    person.y = 300; 
  } else if (keyDown("LEFT")) {
    person.velocityX = 0;
    person.velocityY = 0;
    person.changeAnimation("eating");
    person.x = 400;
    person.y = 300; 
  } else if (keyDown("RIGHT")) {
    person.changeAnimation("bathing");
    person.velocityX = 0;
    person.velocityY = 0;
    person.x = 400;
    person.y = 300; 
  } else if (keyDown("DOWN")) {
    person.changeAnimation("moving");
    person.x = 400;
    person.y = 300; 
    person.velocityX = 3;
    person.velocityY = -3;
  }
}