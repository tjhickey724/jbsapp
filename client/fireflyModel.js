theModel = (function() { 

function FireflyNet(x,y,r,c) {
	this.x=x; this.y=y; this.r=r; this.c=c;
}

FireflyNet.prototype.caught = function(f) {
	var d = distFromOrigin(f.x-this.x,f.y-this.y);
	return(d<(f.r+this.r));
}

function distFromOrigin(x,y) { return Math.sqrt(x*x + y*y);}

function Firefly(x,y,r,c,vx,vy){
	this.x=x;
	this.y=y;
	this.r=r;
	this.c=c;
	this.vx=vx;
	this.vy=vy;
	this.alive = true;
}

Firefly.prototype.update = function(dt){
	if ((this.y + this.r >= 100) || (this.y - this.r <= 0)) this.vy *= -1;
	if ((this.x + this.r >= 100 )|| (this.x - this.r <= 0)) this.vx *= -1;
	this.x += this.vx*dt;
	this.y += this.vy*dt;

}


function FireflyModel(){
	this.w=100;
	this.h=100;
	this.net = new FireflyNet(10,10,10,"green");
	this.fireflyList = [];
	this.bgcolor="#eee";
	this.lastTime = (new Date()).getTime();
	this.counter = 0;
	this.running = false;
}

FireflyModel.prototype.addFirefly = function(f){
	this.fireflyList.push(f);
}
FireflyModel.prototype.update = function(){
	var theTime = (new Date()).getTime();
	var dt = theTime - this.lastTime; // in milliseconds
	this.lastTime = theTime;
	//var fps = 1000/(dt);
	//console.log("fps="+fps);

	var theNet = this.net;
	_.each(this.fireflyList,
		   function(f){
			   f.update(dt/1000.0);
			   if (theNet.caught(f)) {
				   f.alive = false;
			   }
		   
		   }
	   );
	this.fireflyList = _.filter(this.fireflyList,
								function(f){return f.alive})
}


FireflyModel.prototype.init = function() {
	
	var f1 = new Firefly(50,50,5,"black",10,-5);
	var f2 = new Firefly(50,50,10,"red",45,15);
	theModel.addFirefly(f1);
	theModel.addFirefly(f2);
	for(var i =0; i<100; i++){
		var myvx = Math.random()*10-5;
		var myvy = (Math.random()-0.5)*10;
		var c = (Math.random()<0.5)?"red":"black";
		theModel.addFirefly(new Firefly(50,50,1,c,myvx,myvy))
	}
}

theModel = new FireflyModel(); 
theModel.init();
return theModel;
}())
