let brushOn = false; //So then the brush only activates when the user presses one of the buttons

function setup() {
  createCanvas(500, 500); //Creates a canvas
  background(248, 250, 253); //changes background colour
  
  
  //Creating a button
  let button1 = createButton('Brush');
  button1.position(10,10); //Where the button is on the screen
  //When the mouse is pressed it will turn on the brush function
  button1.mousePressed(() => {
    brushOn = true;
    buttonChosen = 'Brush';
  });
  
  //Creating a button
  let button2 = createButton('Spray');
  button2.position(10,40); //Where the button is on the screen
  //When the mouse is pressed it will turn on the brush function
  button2.mousePressed(() => {
    brushOn = true;
    buttonChosen = 'Spray';
  });
  
    //Creating a button
  let button3 = createButton('Squares');
  button3.position(10,70); //Where the button is on the screen
  //When the mouse is pressed it will turn on the brush function
  button3.mousePressed(() => {
    brushOn = true;
    buttonChosen = 'Squares';
  });
  
      //Creating a button
  let button4 = createButton('Eraser');
  button4.position(10,100); //Where the button is on the screen
  //When the mouse is pressed it will turn on the brush function
  button4.mousePressed(() => {
    brushOn = true;
    buttonChosen = 'Eraser';
  });

}

//Turns on the 'draw' function when nothing else is happening
function draw() {
  
}

//Styles the brush tool
function brushTool() {
  
//Makes the brush fully black
  stroke(0);
  fill(0);
  //Makes the circles overlap
  ellipse(mouseX, mouseY, 20, 20);
}

//Styles the brush tool
function sprayTool() {
  
//Makes the brush fully black
  stroke(0);
  fill(0, 70); //Makes it a bit transparent
  
  //Creating a loop so then it makes 25 small random circles in a 10 x -10 radius
  for (let i=0; i < 25; i++) {
    let offsetX = random(-10, 10);
    let offsetY = random(-10,10);
    ellipse(mouseX + offsetX, mouseY + offsetY, 1, 1);
  }
}

//Styles the brush tool
function squaresTool() {
  
//Makes the brush fully black
  stroke(0);
  fill(0);
  
  //Makes the squares follow the mouse. Also, it will be equal height and width of 20 x 20
  rect(mouseX, mouseY, 20, 20);
}

//Styles the brush tool
function eraserTool() {
  
//Makes the brush fully black
  noStroke(); // This completely removes the stroke
  fill(0);
  
  fill(248, 250, 253); // This is the same as my background colour so it will act as an eraser
  ellipse(mouseX, mouseY, 20, 20); // This will overlap and allow the user to erase with their mouse
}

//When the user drags the mouse and the button is activated, it will draw
function mouseDragged() {
  if (brushOn) {
    if (buttonChosen === 'Brush') {
      brushTool();
  } else if (buttonChosen === 'Spray') {
      sprayTool();
    } else if (buttonChosen === 'Squares') {
      squaresTool();
    } else if (buttonChosen === 'Eraser') {
      eraserTool();
    }
  }
}