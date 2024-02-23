function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
   push();
      background(173, 216, 230);     
  
  //background log
  noStroke()
   fill(139, 69, 19);
  rect(0 ,350, 400, 20);
  
  //background standing branch
   fill(139, 69, 19);
  rect(350 ,0, 20, 370);
  
  //background tree bush
  fill(50, 205, 50)
  circle(350,30,90)
  circle(280,70,90);
  circle(350,70,90);

  pop();

  //---------- Creature--- -------------------------
  push();
    translate(200, 400);
  
  // leg
  fill(150, 112, 8);
  ellipse(30, -70, 155, 40);
  
  //body
  fill(150, 112, 80)
  rect(-50,-210,100,140)
  
  // legs
  fill(150, 112, 80);
  ellipse(20, -60, 155, 40);
  
  //head outline
  fill(150, 112, 80);
  ellipse(0, -250, 100, 100);

  //inner head
  fill(235, 213, 197);
  noStroke();
  ellipse(0,-250,85,85);
  
  //outer eyes
  fill(133, 79, 36);
  ellipse(-20, -250, 30, 20);
  ellipse(20, -250, 30, 20);
  
  //pupils
  fill(0);
  circle(-20, -250, 11);
  circle(20,-250,11);
  
  //nose
  fill(0);
  triangle(5, -240, -5, -240, 0, -235);
  
  //line connecting to mouth
  stroke(0)
  line(0, -235, 0, -230);
  
  //mouth
  stroke(0); 
  arc(0, -230, 30, 20, 0, PI,CHORD);
  
  // arms
  fill(150, 112, 80);
  ellipse(100, -200, 155, 40);
  ellipse(-100, -200, 155, 40);

  pop();
 
  //---------- Bird--- -------------------------
  push();
  translate(200, 90);
  fill(255, 255, 0);
  ellipse(0, 0, 30, 30);
  
  // Wings
  fill(255, 255, 0);
  ellipse(-15, 0, 15, 10);
  ellipse(15, 0, 15, 10);
  
  // Beak
  fill(255, 165, 0);
  triangle(0, 0, 5, 5, 0, 8);
  
  // Eyes
  fill(0);
  ellipse(-5, -3, 3, 3);
  ellipse(5, -3, 3, 3);
  
  pop();
}
