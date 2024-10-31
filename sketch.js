const CLOCK_RADIUS = 300;
const CLOCK_ANGLE = 30;
const TEXT_SIZE = 15;
const TIME_ARRAY = ['1','2','3','4','5','6','7','8','9','10','11','12'];
const NUM_TICKS_HOUR = 12;
const NUM_TICKS_MINUTE = 60;

function setup() {
  createCanvas(500, 500);
  background(150);
}

function draw() {
  background(150);
  drawClock();
  drawNumbers();
  drawTicks(NUM_TICKS_HOUR, CLOCK_ANGLE, 140);
  drawTicks(NUM_TICKS_MINUTE, 6, 147);
  
  // Draw clock hands
  drawClockHands();
}

function drawClockHands() {
  const secondAngle = map(second(), 0, 60, 0, 360);
  const minuteAngle = map(minute(), 0, 60, 0, 360);
  const hourAngle = map(hour() % 12, 0, 12, 0, 360);

  drawHand(secondAngle, CLOCK_RADIUS * 0.45, 1.5, 'red');
  drawHand(minuteAngle, CLOCK_RADIUS * 0.4, 3, 'blue');
  drawHand(hourAngle, CLOCK_RADIUS * 0.3, 6, 'green');
}

function drawHand(angle, length, weight, color) {
  push();
  translate(width / 2, height / 2);
  rotate(radians(angle - 90));
  strokeWeight(weight);
  stroke(color);
  line(0, 0, length, 0);
  pop();
}

function drawClock() {
  fill('aquamarine');
  ellipse(width / 2, height / 2, CLOCK_RADIUS, CLOCK_RADIUS);
  stroke('black');
}

function drawNumbers() {
  for (let i = 1; i <= 12; i++) {
    drawTextAtAngle(i * CLOCK_ANGLE, TIME_ARRAY[i - 1], TEXT_SIZE, 'yellow');
  }
}

function drawTicks(numTicks, tickAngle, tickLength) {
  for (let i = 0; i < numTicks; i++) {
    drawLineAtAngle(i * tickAngle, tickLength);
  }
}

function drawTextAtAngle(angle, textContent, size, fillColor) {
  push();
  translate(width / 2, height / 2);
  rotate(radians(angle - 90));
  fill(fillColor);
  textSize(size);
  textAlign(CENTER);
  text(textContent, 0, -CLOCK_RADIUS / 2 + 25);
  pop();
}

function drawLineAtAngle(angle, length) {
  push();
  translate(width / 2, height / 2);
  rotate(radians(angle - 90));
  strokeWeight(2);
  line(0, -CLOCK_RADIUS / 2, 0, -length);
  pop();
}
