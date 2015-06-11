Template.chat.events({
	"submit #createmessage": function(event){
		event.preventDefault();

		var message = event.target.message.value;
		//var username = Meteor.user().profile.userName;

		console.log(JSON.stringify(this));

		Chat.insert({username:Meteor.user().profile.userName, time:new Date(), message:message});
	}
})
