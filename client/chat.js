
Template.chat.helpers({
	messages: function(){return Chats.find();}
})

Template.chat.events({
		
		"submit #addmessage": function(event) {
		var today = new Date();
		var counter = Chats.find({}).count();
		event.preventDefault();
		var text = event.target.message.value;
		console.log(JSON.stringify(this));
		if(Meteor.user() == null) {
			Chats.insert({createdAt: today, username:"Anonmyous", message: text});
		} else if(Meteor.user().profile.userName == undefined) {
			Chats.insert({createdAt: today , username:Meteor.user().emails[0].address, message: text});
		} else {
			Chats.insert({createdAt: today, username:Meteor.user().profile.userName, message: text});
		}

		if(counter > 9) {
			Chats.remove(Chats.findOne()._id);
		}

		event.target.message.value= "";
	}
})