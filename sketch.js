const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division=[];

var divisionHeight=300;
var score =0;
var particle;



var gameState=end;

function setup() {
  createCanvas(1200, 1200);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,100));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,200));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,300));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,400));
    }

    
//log1=new Box(500,45,40,40,PI/4);
//log1=new Box(500,45,40,40,PI/4);
    

    
}
 



function draw() {

  background("black");
 
 // textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
 push();
  strokeWeight("5");
  stroke("cyan");
 fill("black");
 textSize(33);
text("Count = "+score,10,50);
pop();


push();
  strokeWeight("3");
  stroke("cyan");
 fill("black");
 textSize(18);
text("1 particle = 10 points",200,45);
pop();





//fill("blue");
//textSize("33");
//text("500",340,520);

//fill("blue");
//textSize("33");
//text("500",420,520);

//fill("blue");
//textSize("33");
//text("1000",495,520);

//fill("blue");
//textSize("33");
//text("1000",255,520);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

  // log1.display();

   

   
}





