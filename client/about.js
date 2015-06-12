

Template.about.helpers({
   culprits: function() {return Suspects.find({});}
 })

Template.about.events({
	"submit #addSuspects": function(event) {
		event.preventDefault();	
		var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    m = checkTime(m);
	    function checkTime(i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
		};
		event.preventDefault();
		var text = event.target.suspect.value;
		console.log(JSON.stringify(this));
		if(Meteor.user() == null) {
			window.alert("You need to login first");
		} else {
			Suspects.insert({culprits: text});
		}
		event.target.message.value= "";
	}
})