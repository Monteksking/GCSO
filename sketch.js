var movingRect 
var stillRect
var speed
var car
var wall
var weight

function setup() {
  createCanvas(1600,400);
  car = createSprite (80,90,50,50)
    speed = random (50,200)
    weight = random (400,1500)
    wall = createSprite (1300,100,60,height/2)
    wall.shapeColor = color (80,80,80)
    car.velocityX = speed 
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x < (car.width+wall.width)/2) {
  var defomation = 0.5 * speed * speed * weight/22500
  car.velocityX = 0 
  if (defomation<100){
  car.shapeColor = "green"  
  }

  if (defomation>180){
    car.shapeColor = "red"  
    }

    if (defomation<180 && defomation>100){
      car.shapeColor = "yellow"  
      }

  }
  drawSprites();
  
}
  
function bounceoff(){
if((movingRect.x-stillRect.x === movingRect.width/2+stillRect.width/2) 
||((stillRect.x-movingRect.x === movingRect.width/2+stillRect.width/2) ) )
 {
  stillRect.shapeColor ="red";
       movingRect.shapeColor ="red"; 
      }else{ stillRect.shapeColor ="green";
        movingRect.shapeColor ="blue"; }
}