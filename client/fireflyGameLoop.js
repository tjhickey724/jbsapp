function run(){
	
	theModel.update();
	theView.draw();
	
	if (theModel.running) 
		window.requestAnimationFrame(run);
}

theGameLoop = {run:run};