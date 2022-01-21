var Box1

function setup() 
{
  createCanvas(400, 400);

  Box1=new Box(200,200,50,50,2)
}

function draw() 
{
  background(220);

  Box1.show()
  Box1.move()
}

