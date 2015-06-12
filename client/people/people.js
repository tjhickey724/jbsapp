Template.people.helpers({
	profiles: function(){ return Meteor.users.find({});}
})

Template.people.events({
	"click .profile-photo": function(event){
		console.log(event.target);
		console.log(this);
		
	}
})