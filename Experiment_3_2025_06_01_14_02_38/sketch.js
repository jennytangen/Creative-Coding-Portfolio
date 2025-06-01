// Creates two characters and a point
let knight1;
let knight2;
let point;
let endGame = false;

function setup() {
  createCanvas(500, 700); // Creates the canvas
  
  // Creates the first knight and adds all of its attributes
    knight1 = {
    x: 20,
    y: 60,
    w: 30,
    h: 30,
    color: 'cyan',
    speed: 10,
    score: 0
  };
  
  // Creates the second knight and adds all of its attributes
  knight2 = {
    x: 60,
    y: 60,
    w: 30,
    h: 30,
    color: 'yellow',
    speed: 10,
    score: 0
  };
  
  // Puts the random point into the actual code
  randomPoint();
  
}

function draw() {
  background('pink'); // Changed background colour
  
  if (!endGame) { // Game is not over
    
  // I added text and a showing score live feature to help users know who is winning.
  textSize(15);
  text(`Blue player score: ${knight1.score}`, 10, 30);
  text(`Yellow player score: ${knight2.score}`, 350, 30);

  // Designs the first knight and connects it with the attributes at the start
  fill(knight1.color);
  circle(knight1.x, knight1.y, knight1.w, knight1.h);
  

  // Designs the first knight and connects it with the attributes at the start
  fill(knight2.color);
  circle(knight2.x, knight2.y, knight2.w, knight2.h);
  
  // Creates the knights
  controlKnights();
  
  // Creates the random points
  createRandomPoint();
  
  // Allows the knights to eat points
  eatsPoint(knight1);
  eatsPoint(knight2);
  } else {
    // Game ends
    
    // Styles the text at the end
    background('orange')
    textSize(30);
    textAlign(CENTER, CENTER)
    
    // Conditional statement for when each player wins
    if (knight1.score >= 10) {
      text("Well done Blue Player!", 250, 250)
    } else if (knight2.score >= 10) {
      text("Well done Yellow Player!", 250, 250)
    }

  }
  
}

// Creates the function to let users move the knights
function controlKnights() {
  
    // This makes arrow controls for knight 1.  This just reduces or increases speed with which button they hold down.
  if (keyIsDown(LEFT_ARROW)) knight1.x -= knight1.speed;
  if (keyIsDown(RIGHT_ARROW)) knight1.x += knight1.speed;
  if (keyIsDown(UP_ARROW)) knight1.y -= knight1.speed;
  if (keyIsDown(DOWN_ARROW)) knight1.y += knight1.speed;
  
  // This makes wasd controls for knight 2.  This just reduces or increases speed with which button they hold down.
  if (keyIsDown(65)) knight2.x -= knight2.speed;
  if (keyIsDown(68)) knight2.x += knight2.speed;
  if (keyIsDown(87)) knight2.y -= knight2.speed;
  if (keyIsDown(83)) knight2.y += knight2.speed;
}

// Creates the random point function so it appears in a random place
function randomPoint() {
  point = {
    x: floor(random(width)),
    y: floor(random(height))
  };
}

// Styles the random point
function createRandomPoint() {
  fill('black');
  ellipse(point.x, point.y, 10, 10)
}

// Creates a new function which allows the knights to eat the point
function eatsPoint(knight) {
  let distance = dist(knight.x, knight.y, point.x, point.y); // This checks the distance between the player and the point
  
  // This conditional means that if the distance is less than the players width (plus half the points width) then they will gain a point and a new point will be created.
  if (distance < (knight.w / 2 + 5)) {
    knight.score++;
    randomPoint();
    
    if (knight.score >= 10) {
      endGame = true;
    }
    
  }
}




