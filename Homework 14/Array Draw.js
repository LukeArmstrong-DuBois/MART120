// var for Player
var characterX = 300;
var characterY = 25;
// var for WASD
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// var for enemy 1
var shapeX = 100;
var shapeY = 350;
var shapeXSpeed;
var shapeYSpeed;

// var for enemy 2
var headX = 100;
var headY = 200;
var headDirection = 1;

// var for enemy 3
var shape2X = 100;
var shape2Y = 200;
var shape2Direction = 5;


// var for mouse 
var mouseShapeX;
var mouseShapeY;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(10);
    }


    
}

function draw() {
    //Background
    background('blue');
    stroke(0);
    fill(0);
    createBorders(10);
   

     //Player 
     drawCharacter();
     characterMovement();

    

    //Start message
    DrawStartTXT();

    //player in exit
    InExit();


    //House 
    drawHouse();
   
    characterMovement();

    // click shape
    drawClickShape();


    // potential enemy
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        fill('red')
        square(shapeXs[i], shapeYs[i], diameters[i]);
        fill('yellow')
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 0.5);
        

        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
        
    }
   // In EXIT
function InExit()
{
    if(characterX > width || characterY > width-10)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You made it home!", width/2-50, height/2-50);
    }
}

    
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

// WASD
function characterMovement()
{
    
    if(keyIsDown(w))
    {
        characterY -= 1;   
    }
    if(keyIsDown(s))
    {
        characterY += 1;   
    }
    if(keyIsDown(a))
    {
        characterX -= 1;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 1;   
    }
}

//Make Character
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    
}

//Draw Character
function drawCharacter()
{
    fill('white');
    circle(characterX,characterY,30);
}

//Borders
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height);
}

// Click Shape 
function drawClickShape()
{
    fill('pink');
    circle(mouseShapeX-100, mouseShapeY, 80);
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

//house function 
function drawHouse()
{
//ground 
let groundCL = color('green');
fill(groundCL)
noStroke();
rect(0,550,500,100);

 // House Body
let shoulderCL = color('brown')
fill(shoulderCL)
square(20,500,80);

// Roof
let treeCL = color(300,70,10)
fill(treeCL)
noStroke()
triangle(10, 500, 45, 460, 110, 520,);

}

// Start Text 
function DrawStartTXT()
{
    fill('black')
    textSize(16);
    text("Square astroids are falling! Get to your house!", width-400,height-500)
}