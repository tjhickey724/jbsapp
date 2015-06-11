Meteor.startup(function(){
	if (Colors.find({}).count()==0){
		// create some initial data for the collection...
		Colors.insert({theColor:"red", hex:"ff0000"});

		Colors.insert({theColor:"green", hex:"ff0000"});
		Colors.insert({theColor:"blue", hex:"ff0000"});
		Colors.insert({theColor:"aqua", hex:"ff0000"});
		Colors.insert({theColor:"yellow", hex:"ff0000"});
	}

	if(Chat.find({}).count()==0){
		Chat.insert({username: "Server", time: new Date("6/1/2015"), message: "Hello user"});
		Chat.insert({username: "Sponsers", time: new Date("6/2/2015"), message: "Enjoy!"});
		Chat.insert({username: "Members", time: new Date("5/1/2015"), message: "Hey! What's up!"});
	}
	
});
