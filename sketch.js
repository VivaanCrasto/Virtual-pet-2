var dog;
var dogImg1,dogImg2;
var food;
var rect;
var milk;
var milkImg;
var addFood;
var database;

function preload(){
dogImg1 = loadImage("images/dog1.png");
dogImg2 = loadImage("images/dog2.png");
dogImg3 = loadImage("images/dog3.png");
milkImg = loadImage("images/milk.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(500,420,50,100);
  dog.addImage(dogImg3)
  food = new Food();
  food.getfood();
  
  milk = createSprite(240,480,10,20)
  milk.addImage(milkImg)

  addFood = createButton("Add Food");
  addFood.position(950,230);
  addFood.mousePressed(addFoods);
}


function keyPressed(){
  if(keyCode === 32){
      milk = milk-1;
      food.update(milk);
      dog.addImage(dogImg2) 
  
}
}
function draw() {  
background("green")
noStroke();
textSize(35)
fill("white")
text("Food remaining : " + milk, width-550, 200);

noStroke();
textSize(35)
fill("white")
text("Virtual pet game ",width-540, 50);

if(milk === 0){
  dog.addImage(dogImg1)
}
//if(milk === -1){
  //rect = createSprite(520,200,550,50);
  //rect.shapeColor = "green"
  //noStroke();
///textSize(35)
//fill("white")
//text("Happy dog", width-490, 250);0
//}

drawSprites(); 
}

function addFoods(){
  addFood.mousePressed(()=>{
    milk = 10;
    dog.addImage(dogImg3);
   });
}


