
Template.chat.helpers({
	users: function(){return Message.find({},{sort:{time:-1},limit:10})}
})

Template.chat.events({
	"submit #createchat": function(event){
		event.preventDefault();

		var name = Meteor.user().emails[0].address;
		/*var name = Meteor.user().profile.username;*/
		var text = event.target.text.value;
		var time = new Date();
		console.log(JSON.stringify(this));

		Message.insert({name:name, time:time, text:text});
		
	}
})