const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;


var dog,dog2;
var feed,add;
var foododject;
var Feedtime;
var lastfeed;
var database;
var position;
var gameState = "start";

function preload()
{
   dogimg1 = loadImage("images/dogImg.png");
   dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;
    
  database = firebase.database();
  console.log(database);
   
  foododject = new Food();
  dog = createSprite(890,250,120,120);
  dog.addImage(dogimg1);
  dog.scale = 0.1;
  
  var dogo = database.ref("Food");
  dogo.on("value",readPosition);
  feed = createButton("FEED DOG");
  feed.position(800,60);
  feed.mousePressed(FeedDog);

  add = createButton("ADD FOOD");
  add.position(900,60);
  add.mousePressed(AddFood);
  Engine.run(engine);

  
  
}


function draw() {  
  rectMode(CENTER);
  background("lightgreen");

  foododject.display();
  dog.display();
 
  textSize(25);
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("FEED THE DRAGON MILK TO THE DOG BY PRESSING FEED DOG BUTTON",60,100); 
  textSize(20);
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("LAST FEED:5PM",200,30);
  drawSprites();
  //add styles here

}

function readPosition(data){
     position = data.val();
     foododject.updateFoodStock(position);
}

function writePosition(x){
   if(x>0){
     x=x-1
   }else{
     x=0
   }
   database.ref('/').set({
       'Food':x
   })
}
function AddFood(){
  position++
  database.ref('/').update({
       Food:position
  })
}
function FeedDog(){
   dog.addImage(dogimg2);
   foododject.updateFoodStock(foododject.getFoodStock()-1);
   database.ref('/').update({
       Food:foododject.getFoodStock(),
       Feedtime:hour()  
   })
}


  



  
        
      
      