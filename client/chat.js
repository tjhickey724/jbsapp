Template.chats.helpers({
	// limit to the last 10, most recent first
	chatData: function() { return Chats.find({},{sort:{createdAt:-1},limit:10}); }
});

Template.chat.events({
	"submit #chatform": function(event){
		event.preventDefault();

		var chatbox = event.target.chatbox.value;


			Chats.insert({
				username:Meteor.user().emails[0].address,
				createdAt:new Date(),
				message:chatbox
			});
		
		document.getElementById('chatbox').value = '';
	}
})