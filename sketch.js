const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground (240,780,480,20);

  division1 = new Division (0,620,10,300);
  division2 = new Division (80,620,10,300);
  division3 = new Division (160,620,10,300);
  division4 = new Division (240,620,10,300);
  division5 = new Division (320,620,10,300);
  division6 = new Division (400,620,10,300);
  division7 = new Division (480,620,10,300);

  plinko1 = new Plinko (20, 100, 10);
  plinko2 = new Plinko (80, 100, 10);
  plinko3 = new Plinko (140, 100, 10);
  plinko4 = new Plinko (200, 100, 10);
  plinko5 = new Plinko (260, 100, 10);
  plinko6 = new Plinko (320, 100, 10);
  plinko7 = new Plinko (380, 100, 10);
  plinko8 = new Plinko (440, 100, 10);

  plinko9 = new Plinko (10, 200, 10);
  plinko10 = new Plinko (60, 200, 10);
  plinko11 = new Plinko (110, 200, 10);
  plinko12 = new Plinko (160, 200, 10);
  plinko13 = new Plinko (210, 200, 10);
  plinko14 = new Plinko (260, 200, 10);
  plinko15 = new Plinko (310, 200, 10);
  plinko16 = new Plinko (360, 200, 10);
  plinko17 = new Plinko (410, 200, 10);
  plinko18 = new Plinko (460, 200, 10);

  plinko19 = new Plinko (20, 300, 10);
  plinko20 = new Plinko (80, 300, 10);
  plinko21 = new Plinko (140, 300, 10);
  plinko22 = new Plinko (200, 300, 10);
  plinko23 = new Plinko (260, 300, 10);
  plinko24 = new Plinko (320, 300, 10);
  plinko25 = new Plinko (380, 300, 10);
  plinko26 = new Plinko (440, 300, 10);

  plinko27 = new Plinko (10, 400, 10);
  plinko28 = new Plinko (60, 400, 10);
  plinko29 = new Plinko (110, 400, 10);
  plinko30 = new Plinko (160, 400, 10);
  plinko31 = new Plinko (210, 400, 10);
  plinko32 = new Plinko (260, 400, 10);
  plinko33 = new Plinko (310, 400, 10);
  plinko34 = new Plinko (360, 400, 10);
  plinko35 = new Plinko (410, 400, 10);
  plinko36 = new Plinko (460, 400, 10);
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
 
 
  
    

  




  drawSprites();
}