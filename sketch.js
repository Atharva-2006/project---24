//Create variables here
var dog, happyDog, database, foodS, foodStock,dogI,happyDogI
function preload()
{
  dogI=loadImage("images/Dog.png");
  happyDogI=loadImage("images/happyDog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  
}


function draw() {  

  drawSprites();
  //add styles here

}



