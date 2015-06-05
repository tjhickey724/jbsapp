Meteor.startup(function(){
	if (Colors.find({}).count()==0){
		// create some initial data for the collection...
		Colors.insert({theColor:"red", hex:"ff0000"});

		Colors.insert({theColor:"green", hex:"ff0000"});
		Colors.insert({theColor:"blue", hex:"ff0000"});
		Colors.insert({theColor:"aqua", hex:"ff0000"});
		Colors.insert({theColor:"yellow", hex:"ff0000"});
	}

	//if (Chat.find({}).count==0){
		console.log("test");
		Chat.insert({text:"blah1"});
		Chat.insert({text:"blah2"});
		Chat.insert({text:"blah3"});
		Chat.insert({text:"blah4"});
	//}
});
