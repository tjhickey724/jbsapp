Template.artists.helpers({
	profiles: function(){ return Meteor.users.find({});}
})

Template.artists.events({
	"click .profile-photo": function(event){
		console.log(event.target);
		console.log(this);
		
	}
})