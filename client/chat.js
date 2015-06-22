
Template.chat.helpers({
   chat: function(){return Chats.find({},{sort:{createdAt:1},limit:4})}
})

Template.chat.events({
	"submit #sendmessage": function(event){
		event.preventDefault();

		var message = event.target.message.value;
		console.log(JSON.stringify(message));

		Chats.insert({username:Meteor.user().emails[0].address, createdAt:new Date(), message:message});

	}
})	