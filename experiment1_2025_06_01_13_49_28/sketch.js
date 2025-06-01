let sunRays = 12; // Sets the limit to 12 rays at a time
let sunRaysVisible = 0; // Starts at zero
let cloudEnteringTime = 0;
let minuteNow = -1; // Since this means the code can figure out what the live time is

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Makes the code into degrees so then when creating the sun rays, it makes it equal radius
  frameRate(60); // Creates a better animation when the cloud goes past
  
}

function draw() {
  background('lightblue'); // Makes the background light blue
  push(); // Saves the previous section before it resets
  translate(200, 200); // Centers the objects
  

  // Creating the sun
  fill('yellow');
  noStroke(); // Removes the stroke completely
  circle(0, 0, 80);
  
  // Creating the sun rays
  stroke('yellow');
  strokeWeight(5);
  
  let liveTime = hour() % 12; // Makes the code work in a 12 hour time frame
  sunRaysVisible = liveTime; // Connects the visible sun rays to the actual time
  
  // Creating the sun rays with a repeating loop so it creates them in the same place
  for (let i = 0; i < sunRaysVisible; i++) {
    push(); // This will mean that the sun visible rays will be saved before creating a new ray
    rotate(i*30); // Rotates the lines 30 degrees
    line(0, 50, 0, 90)
    pop(); // This will mean that the sun visible rays will go back to before it was rotated
  }
  
  let liveMinute = minute(); // This connects the variable to the actual minute now
  
  // If the actual time doesnt equal the code minute then it will update it to make them the same
  if (liveMinute !== minuteNow) {
    minuteNow = liveMinute;
    cloudEnteringTime = millis(); // Cloud will start moving already to make it more accurate timing
  }
  
  // Counts how many seconds the cloud has been going for
  let elapsedSeconds = (millis() - cloudEnteringTime) / 1000;
  
  // Moves the cloud
  let cloud1 = map(elapsedSeconds, 0, 60, -100, width + 100);
  
  // This draws the cloud in frame
  if (elapsedSeconds <= 60) {
    makeCloud1(cloud1 - 200, 50);
  }
  
  
  // Makes sure that only if there are enough space then it will add another ray. Since at the start it says that there are a maximum of 12 rays, it will not go over this.
  if (sunRaysVisible < sunRays) {
    sunRaysVisible++;
  }
}

  // Draws the cloud and makes it pass in the same location and size every time
function makeCloud1(x, y) {
  fill('white');
  noStroke();
  ellipse(x, y, 70, 40);
  ellipse(x + 25, y - 10, 70, 50);
  ellipse(x + 50, y, 70, 40);
}
