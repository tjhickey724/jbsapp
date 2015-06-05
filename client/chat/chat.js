Template.chats.helpers({
   chatfunc: function(){return Chats.find();}
 });

Template.chatform.helpers({
	chatdata: function(){
		return Chats.findOne({username:Meteor.user().emails[0].address});
	}
})

Template.chatform.events({
	"submit #sendmessage": function(event){
		event.preventDefault();

		
		var username= Meteor.user().emails[0].address;
		var timestamp = new Date();
		var message= event.target.message.value;

		console.log(JSON.stringify(message));

		Chats.insert({username:username, timestamp:timestamp, message:message});

		Router.go('/chats');	
	}
})