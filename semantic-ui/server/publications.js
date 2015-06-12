Meteor.publish("thefenboards",function(){return FenBoards.find();});
Meteor.publish("theprofiles",function(){return Profiles.find();});

Meteor.publish("userData", function(){
	if (this.userId){
		return Meteor.users.find({});
	}
	else {
		this.ready();
	}
});