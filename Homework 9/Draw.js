function setup() {
    createCanvas(800, 650);
  }
  
  function draw() { 
    line(100, 200, 200, 200); 
    line(100, 250, 200, 250);
    line(100, 300, 200, 300);
    line(100, 350, 200, 350);
    line(100, 400, 200, 400);

    strokeWeight(10);
    point(130, 200);
    point(150, 180);
    point(170, 290);

    let txtCL = color('black');
    fill(txtCL)
    textSize(30);
    text('Standing next to the ugly tree', 333, 50);

    textSize(15);
    text('Luke Armstrong-DuBois!',12, 30, );

    let headCL = color(229,194,152);
    fill(headCL);
    noStroke();
    circle(400,400,300);

    let eyeCL = color('white')
    fill(eyeCL);
    noStroke();
    circle(350,300,50);
    circle(500,300,50);

    let mouthCL = color('red');
    fill(mouthCL)
    noStroke();
    ellipse(450,500,90,40);

    let groundCL = color('green');
    fill(groundCL)
    noStroke();
    rect(1,600,800,60);

    let noseCL = color('pink')
    fill(noseCL)
    noStroke();
    triangle(400, 400, 450, 420, 400, 300,);

    let shoulderCL = color('purple')
    fill(shoulderCL)
    noStroke();
    square(300,540,200);


    let hairCL = color('red')
    fill(hairCL)
    noStroke()
    line(30, 20, 85, 75);

    let pupilCL = color('black')
    fill(pupilCL)
    noStroke()
    circle(350,300,10);
    circle(500,300,10);

    let treeCL = color('brown')
    fill(treeCL)
    noStroke()
    triangle(200, 400, 100, 150, 200, 800,);




    

    
    
    


  }

  
