Template.Chat.helpers({
	chatBlock: function(){return Chats.find({},{sort:{createdAt:-1},limit:10})}
})

Template.chatInsert.events({
	"submit #entertext": function(event){
		event.preventDefault();
		var message = event.target.conversationHistory.value;
		Chats.insert({username:Meteor.user().emails[0].address, text:message, createdAt: new Date()});
	}

})