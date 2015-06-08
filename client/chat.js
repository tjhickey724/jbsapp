Template.chat.helpers({
	chats: function(){return Chats.find({},{sort:{createdAt:-1},limit:10});}
})

Template.chatinput.events({
	"submit #chatinput": function(event){
		event.preventDefault();
		var username = Meteor.user().emails[0].address;
		var chatline = event.target.chatline.value;
		Chats.insert({username:username, chatline:chatline, createdAt:new Date()});
		event.target.chatline.value="";
	}
})