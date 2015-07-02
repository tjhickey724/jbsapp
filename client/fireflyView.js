function draw(){

	var drawContext = gameboard.getContext("2d");
	
	drawContext.fillStyle="#eee";
	drawContext.fillRect(0,0,gameboard.width,gameboard.height);
	drawContext.strokeStyle="#f00";

	//console.log("drawing "+JSON.stringify(theModel.fireflyList));
	_.each(theModel.fireflyList,
		function(f) {
			//console.log("drawing ff "+JSON.stringify(f));
			if (!f.alive) return;
			drawContext.strokeStyle = f.c;
			drawContext.beginPath();
			drawContext.arc(f.x*gameboard.width/100,
							f.y*gameboard.height/100,
							f.r*gameboard.width/100,
							0,2*Math.PI,true);
							//console.log(f.x*gameboard.width/100);
			drawContext.stroke();
		}
	);
	
	
	var net = theModel.net;
	drawContext.strokeStyle = net.c;
	drawContext.beginPath();
	drawContext.arc(net.x*gameboard.width/100,
					net.y*gameboard.height/100,
					net.r*gameboard.width/100,
					0,2*Math.PI,true);
	drawContext.stroke();
		
}

theView = {draw:draw};