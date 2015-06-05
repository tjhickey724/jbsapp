Template.chats.helpers({
	chatData: function() {return Chats.find();}
});

Template.chat.events({
	"submit #chatform": function(event){
		event.preventDefault();

		var chatbox = event.target.chatbox.value;

		Chats.insert({
			username:Meteor.user().profile.userName,
			createdAt:new Date(),
			message:chatbox
		});

		document.getElementsByName('chatbox').value = '';
	}
})