const CLOCK_RAIDUS = 300;
const CLOCK_ANGLE = 30;
const TEXT_SIZE = 20;
const TIME_ARRAY = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  
function setup() {
  createCanvas(500, 500);
  background(220);

  // Setup the clock
  configureClock()

  // Draw the second hand
  drawHand(width/2,height/2, width/2, (height/2)-(CLOCK_RAIDUS/2)+TEXT_SIZE*2);
}

function configureClock() {
  // Draw the clock
  ellipse(width/2,height/2, CLOCK_RAIDUS, CLOCK_RAIDUS);

  // Draw the center pivot
  strokeWeight(10);
  point(width/2,height/2)
  
  // Add numbers
  for (let i = 1; i <= 12; i++) {
    strokeWeight(5)
    
    push();

    // Translate the origin to the center
    translate(width/2,height/2);
    
    // Rotate 30 degrees by the origin 
    angleMode(DEGREES);
    rotate(CLOCK_ANGLE*i);

    // Draw the numbers
    strokeWeight(2);
    textAlign(CENTER);
    textSize(TEXT_SIZE);
    text(TIME_ARRAY[i-1],0, -CLOCK_RAIDUS/2+TEXT_SIZE);

    pop();

  }
}

function drawHand(x1,y1,x2,y2) {
  strokeWeight(3)
  line(x1,y1,x2,y2);
}
