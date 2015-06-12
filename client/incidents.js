

Template.incidents.helpers ({
	messages: function() {return Incidents.find({}, {sort: {likes:-1}});}
})

Template.incidents.events({
		"click #thumbsUp" :function() {
			if(Meteor.user() == null) {
			window.alert("You need to login first");
			} else {
			var individual = this._id;
			Session.set('selectedIndividual', individual);
			var selectedIndividual= Session.get("selectedIndividual");
			Incidents.update(selectedIndividual, {$inc: {likes:1}});
			}
		},
		"submit #addmessage": function(event) {
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
			var text = event.target.message.value;
			console.log(JSON.stringify(this));
			if(Meteor.user() == null) {
				window.alert("You need to login first");
			} else if(Meteor.user().profile.userName == undefined) {
				Incidents.insert({createdAt: h +":"+ m + "  " + today.getMonth() + "/" + today.getDay() + "/" + today.getYear()%2000,  userName:Meteor.user().emails[0].address, message: text, likes: 0});
			} else {
				Incidents.insert({createdAt: h +":"+ m + "  " + today.getMonth() + "/" + today.getDay() + "/" + today.getYear()%2000, userName:Meteor.user().profile.userName, message: text, likes: 0});
			}
			event.target.message.value= "";
		}
})
