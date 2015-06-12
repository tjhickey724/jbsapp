Meteor.publish("theMessage",function(){return Messages.find();});
Meteor.publish("theCollege", function(){return Colleges.find();});
Meteor.publish("theMyCollege", function(){return MyColleges.find();});

Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});