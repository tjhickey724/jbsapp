Meteor.startup(function(){
	if (Colors.find({}).count()==0){
		// create some initial data for the collection...
		Colors.insert({theColor:"red", hex:"ff0000"});

		Colors.insert({theColor:"green", hex:"ff0000"});
		Colors.insert({theColor:"blue", hex:"ff0000"});
		Colors.insert({theColor:"aqua", hex:"ff0000"});
		Colors.insert({theColor:"yellow", hex:"ff0000"});
	}

//Populates with initial fake data for testing

	if(Chats.find({}).count()==0) {
		Chats.insert({username:"bob", createdAt: Date(), message: "Hello World"});
		Chats.insert({username:"Tim", createdAt: Date(), message: "Hello McDonalds"});
		Chats.insert({username:"Sam", createdAt: Date(), message: "Hello Chipotle"});
	}
});
