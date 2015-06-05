Template.chat.helpers({
	chatfunc: function()
	{
		{
			return Chats.find
			({},
				{
					sort:{timestamp:-1}, limit:10
				}
			)
		} 
	}
})

Template.chat.events({
	"submit #enterchat": function(event){

		event.preventDefault();

		var message = event.target.message.value;
		console.log(JSON.stringify(message));

		var username = Meteor.user().emails[0].address;	

		var timestamp = new Date();

		Chats.insert({username: username, timestamp: timestamp, message: message});	
		


	}

}
)