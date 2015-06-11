Template.display.helpers(
 {
	chat:  function(){
		return Chat.find({}, {sort: {time: -1}, limit: 10});	
	}
 }
)