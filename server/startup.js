Meteor.startup(function(){
	if (Colors.find({}).count()==0){
		// create some initial data for the collection...
		Colors.insert({theColor:"red", hex:"ff0000"});
		Colors.insert({theColor:"green", hex:"ff0000"});
		Colors.insert({theColor:"blue", hex:"ff0000"});
		Colors.insert({theColor:"aqua", hex:"ff0000"});
		Colors.insert({theColor:"yellow", hex:"ff0000"});
	}

	if(Chats.find({}).count==0){
		Chats.insert({username: "name",text: "Hi there, this is an app which allows you to chat.",createdAt: new Date()})
		Chats.insert({username: "aaa",text: "bbb",createdAt: new Date()})
		Chats.insert({username: "aaa",text: "bbb",createdAt: new Date()})
	}

	if(Schedules.find({}).count==0){
		Schedules.insert({time:"00:00",remind:"Go to Sleep"})
		Schedules.insert({time:"06:00",remind:"Get up"})
		Schedules.insert({time:"10:00",remind:"JBS classes"})
	}
});

