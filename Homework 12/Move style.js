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
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background('blue');
    stroke(0);
    fill(0);
    createBorders(10);

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

    // start message
    textSize(16);
    text("Astroids are falling! Get to your house!", width-400,height-500)

    drawCharacter();
    characterMovement();

     // enemy two 
     fill(201,27,0);
     circle(headX,headY,125);
     headX+=headDirection;
     if(headX >= 418 || headX <= 82)
     {
         headDirection *= -9;
     }

     else if (headX > 800) {
        headX += 9;
      }

    else if (headX <= 300) {
      headX += 12;
    } 

     //enemy three
     fill('yellow');
     circle(shape2X, shape2Y, 50);
     shape2Y += shape2Direction;
    if(shape2Y <= 0 || shape2Y >= 450 )
    {
        shape2Direction *= -1;
    }
     

     //ground 
     let groundCL = color('green');
    fill(groundCL)
    noStroke();
    rect(0,550,500,100);

     // House 
    let shoulderCL = color('brown')
    fill(shoulderCL)
    square(20,500,80);

    // Roof
    let treeCL = color(300,70,10)
    fill(treeCL)
    noStroke()
    triangle(10, 500, 45, 460, 110, 520,);

    // Enemy 1
    fill(255,35,15);
    circle(shapeX, shapeY, 100);
    

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move enemy 1
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    // enemy 1 out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    // player in exit
    if(characterX > width || characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You made it home!", width/2-50, height/2-50);
    }

    // click shape
    fill('pink');
    circle(mouseShapeX-100, mouseShapeY, 80);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function characterMovement()
{
    // WASD
    if(keyIsDown(w))
    {
        characterY -= 2;   
    }
    if(keyIsDown(s))
    {
        characterY += 2;   
    }
    if(keyIsDown(a))
    {
        characterX -= 2;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 2;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    
}

function drawCharacter()
{
    fill('white');
    circle(characterX,characterY,30);
}



