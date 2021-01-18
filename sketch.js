var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
	}
	ground = Bodies.rectangle(400,700,800,20,ground_options);
    World.add(world,ground);

	var star_option ={
		restitution:  1.0
	}

	starBody = Bodies.circle(650 , 30 , 5);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x=starBody.position.x
  star.y=starBody.position.y

if(starBody.position.y>470){
	starBody.isStatic=true;
}


  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode === RIGHT_ARROW){
		fairy.velocityX=6;
	}
	if(keyCode === LEFT_ARROW){
		fairy.velocityX=-1;
	}
	if(keyCode === UP_ARROW){
		fairy.velocityX=0;
	}
	if(keyCode === DOWN_ARROW){
		starBody.velocityY=6;
	}
}
