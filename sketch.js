
let snake;
let cwidth;
let cheight;
let originalFr = 20;
let fr = originalFr;
let food;
function setup() {
	cwidth = 400;
	cheight = 400;
	createCanvas(cwidth, cheight)
	frameRate(fr)
	snake = new Snake();
	food = new Food();
	console.log(fr);

	
}

function draw() {
background('gray')
snake.Render();
food.Render();
if(snake.Eat())
{
	snake.size ++;
	
	if(snake.renderframes < originalFr){

	
	snake.renderframes++;
}
else 
{
	
}
	
	food.CreateFood();
	

}

textSize(32);
text('render frames: ' + snake.renderframes + 'FR: ' + fr, 10, 30);


}

function keyPressed() {
	snake.HandleKeys(keyCode);
  }


  function mousePressed() {
	snake.size ++;

	}
	
