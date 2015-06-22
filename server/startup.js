Meteor.startup(function(){
	if (Colors.find({}).count()==0){
		// create some initial data for the collection...
		Colors.insert({theColor:"red", hex:"ff0000"});

		Colors.insert({theColor:"green", hex:"ff0000"});
		Colors.insert({theColor:"blue", hex:"ff0000"});
		Colors.insert({theColor:"aqua", hex:"ff0000"});
		Colors.insert({theColor:"yellow", hex:"ff0000"});
	}

	if (Chats.find({}).count()==0){
		// Chats.insert({username:"melanie", createdAt: new Date(), message:"hello"});
		// Chats.insert({username:"person1", createdAt: new Date(), message:"hi"});
		// Chats.insert({username:"person2", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person3", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person4", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person5", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person6", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person7", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person8", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person9", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person10", createdAt: new Date(), message:"yo"});
		// Chats.insert({username:"person11", createdAt: new Date(), message:"yo"});
	}	
});
