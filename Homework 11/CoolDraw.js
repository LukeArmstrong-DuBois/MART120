var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var eyeX =220;
var eyeY =160;
var eyeDirection = 5;

var size = 30;
var txtcolor =('red')
var count = 0;
var sizeDirection = 2;

var treeX = 400;
var treeY = 200;
var treeDirection = 2;

let x = 0;
let y = 0;
let ballDirection = 2;



function setup(){
    createCanvas(800, 650);
  }

function draw()
{
    
    background('blue');
    textSize(22)
    text("Standing next to the ugly tree", 10,80);

    // head
      fill('pink');
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // eyes
    let eyeCL = color('white')
    fill(eyeCL);
    noStroke();
    circle(eyeX,eyeY,80);
    eyeX+=eyeDirection;
    if(eyeX >= 300 || eyeX <= 40)
    {
        eyeDirection *= -1;
    }

    x+=1
    y+=1
    
    if(y > height)
    {
      y=0;
      x=0; 
    }
    
    ellipse(x,y,50,200)

  
    
    // ground
    let groundCL = color('pink');
    fill(groundCL)
    noStroke();
    rect(1,600,800,60);
    
    
    
    // Shoulders
    let shoulderCL = color('purple')
    fill(shoulderCL)
    noStroke();
    square(bodyX,bodyY,200);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }

    // Tree
    let treeCL = color('brown')
    fill(treeCL)
    noStroke()
    triangle(treeX, treeY, 100, 150, 200, 800,);
    treeY += treeDirection;
    if(treeY <= 0 || treeY >= 600 )
    {
        treeDirection *= -1;
    }


    
    fill(120);
    textSize(size);
    color(txtcolor);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Luke Armstrong-DuBois",100,350 );


}