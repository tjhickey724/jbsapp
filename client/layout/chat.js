Template.chat.helpers({
	user: function(){return Message.find({},{sort:{time:1}, limit:10})}

})


Template.chatform.events({
		"submit #createchatform": function(event){
		event.preventDefault();

		var message = event.target.message.value;
		var username = Meteor.user().emails[0].address;
		
		console.log(username);
		//console.log(username);

		Message.insert({name: username, time: new Date(), message: message});

		
		
	}
})