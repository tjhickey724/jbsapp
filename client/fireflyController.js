var running = false;

Template.firefly.events({
	"click #startgame": function(event){
		console.log("pressed start");

		if (!running) {
			theModel.running=true;
			theGameLoop.run();
			$("#startgame").html("Stop");

		} else {
			theModel.running=false;
			$("#startgame").html("Start");

			
		}
		
	}
})

Template.firefly.rendered = function(){
	document.getElementById("gameboard").addEventListener('mousemove', 
		function(e){
			if (theModel.running) {

				theModel.net.x = 100*(e.pageX-gameboard.offsetLeft)/gameboard.width;
				theModel.net.y = 100*(e.pageY-gameboard.offsetTop)/gameboard.height;
			}
		});
}



