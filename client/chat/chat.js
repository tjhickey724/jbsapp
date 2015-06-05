/*Meteor.chat(function(){
	if (Message.find({}).count()==0){
		console.log("test");
		// create some initial data for the collection...
		Message.insert({user:"tianci", time:, text:"hello"});
		Message.insert({user:"tianci", time:, text:"hello!!"});


	}

})

Template.chat.events({
	"submit #editchat": function(event){
		chat.preventDefault();

		var user = chat.target.user.value;
		var time = chat.target.time.value;
		console.log(JSON.stringify(this));

		IPAddresses.update(this._id,
			{$set:{name:name, ip:ip}});
		
	}
})*/