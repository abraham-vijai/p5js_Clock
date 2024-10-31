const CLOCK_RAIDUS = 300;
const CLOCK_ANGLE = 30;
const TEXT_SIZE = 15;
const TIME_ARRAY = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  
function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw(){
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  // Draw the clock
  drawClock()

  // Draw the numbers
  drawNumbers();

  // Draw the Ticks
  drawTicks(12, CLOCK_ANGLE, 140) 
  drawTicks(60, 6,147) 

  // Draw the second hand
  drawHands(secondAngle, 1.5, 'red');
  drawHands(minuteAngle,3, 'blue');
  drawHands(hourAngle, 6, 'green');

}

function drawHands(handAngle, weight, color){
  push();
  translate(width/2,height/2);
  rotate(handAngle);
  strokeWeight(weight)
  stroke(color)
  line(0,0, 0, -(CLOCK_RAIDUS/2)+TEXT_SIZE*2);
  pop();
}

function drawClock() {
  // Draw the clock
  ellipse(width/2,height/2, CLOCK_RAIDUS, CLOCK_RAIDUS);
}

function drawNumbers() {
  // Add numbers
  for (let i = 1; i <= 12; i++) {
    push();
    // Translate the origin to the center
    translate(width/2,height/2);
    
    // Rotate 30 degrees by the origin 
    angleMode(DEGREES);
    rotate(CLOCK_ANGLE*i);

    // Draw the numbers
    strokeWeight(3);
    textAlign(CENTER);
    textSize(TEXT_SIZE);
    text(TIME_ARRAY[i-1],0, -CLOCK_RAIDUS/2+25);

    pop();
  }
}

function drawTicks(numTicks, tickAngle, tickLength){
  for (let i = 0; i < numTicks; i++) {
    push();
    // Translate the origin to the center
    translate(width/2,height/2);
    
    // Rotate 30 degrees by the origin 
    angleMode(DEGREES);
    rotate(tickAngle*i);

    // Draw the ticks
    strokeWeight(2);
    line(0,-CLOCK_RAIDUS/2, 0, -tickLength)

    pop();
  }
}