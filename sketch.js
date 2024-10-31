function setup() {
  createCanvas(500, 500);
  background(220);

  const CLOCK_RAIDUS = 300;
  const CLOCK_ANGLE = 30;
  const NUMBER_OFFSET = 10;
  const TIME_ARRAY = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  
  // Circle
  ellipse(width/2,height/2, CLOCK_RAIDUS, CLOCK_RAIDUS);

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
    text(TIME_ARRAY[i-1],0, -CLOCK_RAIDUS/2+NUMBER_OFFSET);

    pop();

  }

}

function draw() {
}
