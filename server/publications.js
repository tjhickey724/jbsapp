Meteor.publish("theProfiles",function(){return Profiles.find();});
Meteor.publish("theIncidents",function(){return Incidents.find();});
Meteor.publish("theIncidents2",function(){return Incidents2.find();});
Meteor.publish("theSuspects",function(){return Suspects.find();});


Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});

