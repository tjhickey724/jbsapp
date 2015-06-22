function Firefly(x,y,r,c,vx,vy){
	this.x=x;this.y=y;
	this.r=r;
	this.c=c;
	this.vx=vx;this.vy=vy;
	this.alive=true;
}

function FireflyNet(x,y,r,c){
	this.x=x;this.y=y;this.r=r;this.c=c;
}

FireflyNet.prototype.caught = function(f) {
	var d = distFromOrigin(f.x-this.x,f.y-this.y);
	return (d<(f.r+this.r));
}

function distFromOrigin(x,y) { return Math.sqrt(x*x + y*y);}

Firefly.prototype.update = function(dt){
	if (this.x+this.r >= 300 || this.x-this.r <= 0){
		this.vx = -this.vx; }
	if (this.y+this.r >= 300 || this.y-this.r <= 0){
		this.vy = -this.vy; }
	this.x += this.vx*dt;
	this.y += this.vy*dt;
}

f1 = new Firefly(100,100,25,"red",60,-5);
f2 = new Firefly(50,70,10,"blue",55,15);

function FireflyModel(){
	this.w=300;
	this.h=300;
	this.net=new FireflyNet(20,20,20,"white");
	this.fireflyList=[];
}

FireflyModel.prototype.addFirefly = function(f){
	this.fireflyList.push(f);
}

FireflyModel.prototype.update = function(dt){
	var theNet = this.net;
	_.each(this.fireflyList,
		function(f){
			f.update(dt);
			if (theNet.caught(f)) {
				f.alive=false;
			}
		}	
	);
}

theModel = new FireflyModel(300,300); // we just created the model!
theModel.addFirefly(f1);
theModel.addFirefly(f2);
for(var i=0; i<28; i++){
	var randx = Math.random()*100+50;
	var randy = Math.random()*100+50;
	var randvx = Math.random()*40+20;
	var randvy = Math.random()*40+20;
	var randc1 = (Math.random()<0.5)?"green":"purple";
	var randc2 = (Math.random()<0.5)?"yellow":"orange";
	var randc3 = (Math.random()<0.5)?"black":"blue";
	var randc4 = (Math.random()<0.5)?"hotpink":"red";
	var randc_1 = (Math.random()<0.5)?randc1:randc2;
	var randc_2 = (Math.random()<0.5)?randc3:randc4
	var randc = (Math.random()<0.5)?randc_1:randc_2;;
	var randr = Math.random()*25+5;
	theModel.addFirefly(new Firefly(randx,randy,randr,randc,randvx,randvy));
}

var counter=0;
var lastTime = (new Date()).getTime();

function draw(){

	var drawContext = gameboard.getContext("2d");
	drawContext.fillStyle="#eee";
	drawContext.fillRect(0,0,300,300);

	var net = theModel.net;
	drawContext.strokeStyle="black";
	drawContext.beginPath();
	drawContext.arc(net.x,net.y,net.r,0,2*Math.PI,true);
	drawContext.stroke();
	drawContext.fillStyle=net.c;
	drawContext.fill();

	_.each(theModel.fireflyList,
		function(f) {
			if (!f.alive) return;
			drawContext.strokeStyle=f.c;
			drawContext.beginPath();
			drawContext.arc(f.x,f.y,f.r,0,2*Math.PI,true);
			drawContext.stroke();
		}
	);		
	
}	

function gameLoop(){
	var theTime = (new Date()).getTime();
	var dt = theTime - lastTime;  // in milliseconds
	lastTime = theTime;
	theModel.update(dt/1000.0);
	draw();
	if (running) window.requestAnimationFrame(gameLoop);
}


drawIt = draw;
var running = false;

Template.firefly.events({
	"click #startgame": function(event){
		console.log("pressed start");
		if(!running) {
			running=true;
			lastTime = (new Date()).getTime();
			gameLoop();
			$("#startgame").html("Stop game");
		} else {
			running=false;
			$("#startgame").html("Start game");
		}
		
	}
})

Template.firefly.rendered = function() {
	document.getElementById("gameboard").addEventListener("mousemove", 
		function(e){
			if (running) {
				theModel.net.x = 100*(e.pageX-gameboard.offsetLeft)/gameboard.width;
				theModel.net.y = 100*(e.pageY-gameboard.offsetTop)/gameboard.width;
			}
		}
	);
}