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
		Chat.insert({username: "ABC", time: new Date("6/1/2015"), message: "HI"});
		Chat.insert({username: "CBA", time: new Date("6/2/2015"), message: "HELLO"});
		Chat.insert({username: "ABA", time: new Date("5/1/2015"), message: "HEY"});
		Chat.insert({username: "ACA", time: new Date("4/1/2015"), message: "WHAT'S UP!"});
	}
	
});
