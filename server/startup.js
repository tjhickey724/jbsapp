Meteor.startup(function(){
	if (Colors.find({}).count()==0){
		// create some initial data for the collection...
		Colors.insert({theColor:"red", hex:"ff0000"});

		Colors.insert({theColor:"green", hex:"ff0000"});
		Colors.insert({theColor:"blue", hex:"ff0000"});
		Colors.insert({theColor:"aqua", hex:"ff0000"});
		Colors.insert({theColor:"yellow", hex:"ff0000"});
	}

	if (Chat.find({}).count()==0){
		Chat.insert({username:"ABC", timeSend: new Date(), message:"message 1"});
		Chat.insert({username:"ABCd", timeSend: new Date(), message:"message 2"});
		Chat.insert({username:"ABCe", timeSend: new Date(), message:"message 3"});
		Chat.insert({username:"ABCf", timeSend: new Date(), message:"message 4"});
		Chat.insert({username:"ABCg", timeSend: new Date(), message:"message 5"});
	}
});


