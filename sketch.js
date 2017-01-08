var clickColor = 0;
function setup() {

	//The below function "create canvas" sets the size of yout sketch. Width and height. 
	createCanvas(400,400);
	
}

function draw(){

	fill(clickColor);
	ellipse(40,40,50,50);
}

function mouseClicked(){

	if(clickColor == 0){
		clickColor = [120,  300, 170];
	}else{
		clickColor =0;
	}
}