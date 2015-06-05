Template.chat.helpers({
	chatLines: function(){return Chat.find({},{sort:{timeSent:-1}, limit:10});}
})

Template.chat.events({
		"submit #createChat": function(event){
		event.preventDefault();
		var message = event.target.message.value;
		var name = event.target.name.value;
		console.log(JSON.stringify(this));
		Chat.insert({username:Meteor.user().emails[0].address, timeSent:new Date(), message:message});
		//Meteor.user().emails[0].address --> Another option for username which is email based
		//name for the name field 
	}
})