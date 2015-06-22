function Firefly(x,y,r,c,vx,vy){
	this.x=x;
	this.y=y;
	this.r=r;
	this.c=c;
	this.vx=vx;
	this.vy=vy;
}

Firefly.prototype.update = function(dt){
	if ((this.y + this.r >= 100) || (this.y - this.r <= 0)) this.vy *= -1;
	if ((this.x + this.r >= 100 )|| (this.x - this.r <= 0)) this.vx *= -1;
	this.x += this.vx*dt;
	this.y += this.vy*dt;

}

f1 = new Firefly(50,50,5,"black",10,-5);
f2 = new Firefly(50,50,10,"red",45,15);

function FireflyModel(){
	this.w=100;
	this.h=100;
	this.fireflyList = [];
	this.bgcolor="#eee";
}

FireflyModel.prototype.addFirefly = function(f){
	this.fireflyList.push(f);
}
FireflyModel.prototype.update = function(dt){
	_.each(this.fireflyList,
		   function(f){f.update(dt);}
	   );
}

theModel = new FireflyModel();  // we just create the model!
theModel.addFirefly(f1);
theModel.addFirefly(f2);
for(var i =0; i<10000; i++){
	myvx = Math.random()*10-5;
	myvy = (Math.random()-0.5)*10;
	theModel.addFirefly(new Firefly(50,50,1,"black",myvx,myvy))
}

var counter=0;
var lastTime = (new Date()).getTime();

function draw(){
	var theTime = (new Date()).getTime();
	var dt = theTime - lastTime; // in milliseconds
	lastTime = theTime;
	var drawContext = gameboard.getContext("2d");
	

	drawContext.fillStyle="#eee";
	drawContext.fillRect(0,0,gameboard.width,gameboard.height);
	drawContext.strokeStyle="#f00";

	//console.log("drawing "+JSON.stringify(theModel.fireflyList));
	_.each(theModel.fireflyList,
		function(f) {
			//console.log("drawing ff "+JSON.stringify(f));
			drawContext.beginPath();
			drawContext.arc(f.x*gameboard.width/100,
							f.y*gameboard.height/100,
							f.r*gameboard.width/100,
							0,2*Math.PI,true);
							//console.log(f.x*gameboard.width/100);
			drawContext.stroke();
		}
	);
	
	
	theModel.update(dt/1000.0);
	

	window.requestAnimationFrame(draw);
}

drawIt = draw;

Template.firefly.events({
	"click #startgame": function(event){
		console.log("pressed start");
		draw();
	}
})