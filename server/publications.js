Meteor.publish("theProfiles",function(){return Profiles.find();});
Meteor.publish("theAlbums",function(){return Albums.find();});


Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); 
  } else {
    this.ready();
  }
});

