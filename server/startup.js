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
		//fake chat info
		Chats.insert({username:"test",createdAt:Date(),message:"hello world"});
		Chats.insert({username:"test2",createdAt:Date(),message:"hello world!"});
		Chats.insert({username:"test3",createdAt:Date(),message:"hello world!! This is a nice long message about this fancy new chat app!!"});
	}
});
