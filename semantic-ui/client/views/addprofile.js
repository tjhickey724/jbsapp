Template.formeditprofile.events({
	'submit #editform': function(event){
		event.preventDefault();
		var firstNameVar = event.target.firstname.value;
		var lastNameVar = event.target.lastname.value;
		var classVar = event.target.classvar.value;
		Profiles.insert({
			uid:Meteor.userId(),
			firstname: firstNameVar,
			lastname: lastNameVar,
			classvar: classVar
		});
		alert("Done!");
	}
});

Template.addprofile.rendered = function(){
  this.$('.ui.dropdown').dropdown();
}