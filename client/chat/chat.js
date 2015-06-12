Template.chat.helpers({
	users: function(){return Messages.find({},{sort:{time:-1}})}
})

Template.chat.events({
	'submit #createchat': function(event){
		event.preventDefault();
		var name = Meteor.user().emails[0].address;
		var time = new Date();
		var text = event.target.text.value;
		console.log(JSON.stringify(this));

		Messages.insert({name:name, time:time, text: text});
	}
})