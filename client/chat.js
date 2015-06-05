Template.chat.helpers({
	getChats: function(){return Chats.find();}
})

Template.chat.events({
	"submit #sendMessage": function(event){
		var chatCount = Chats.find({}).count();
		event.preventDefault();

		var message = event.target.message.value;



		console.log(JSON.stringify(this));

		if(Meteor.user()==null){
			Chats.insert({username:"Anonymous", message:message, createdAt:new Date()});
		} else if(Meteor.user().profile.userName==undefined){
			Chats.insert({username:Meteor.user().emails[0].address, message:message, createdAt:new Date()});
		} else {
			Chats.insert({username:Meteor.user().profile.userName, message:message, createdAt:new Date()})
		}

		event.target.message.value="";

		if(chatCount>9){	
			Chats.remove(Chats.findOne()._id);
		}
	}

})