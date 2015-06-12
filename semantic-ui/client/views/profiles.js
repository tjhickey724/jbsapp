Template.renderprofiles.helpers({
	person: function(){
		return Profiles.find({uid:Meteor.userId()});
	}
});