Template.iptable.helpers({
	ips: function(){return IPAddresses.find();}
})

Template.iprow.helpers({
	ismyrow: function(){return Meteor.userId() == this.uid}
});

Template.iprow.events({
	"click .jbsapp-delete-icon": function(){IPAddresses.remove(this._id);}
})