Template.Chat.helpers({
	Chat: function(){return Chat.find({}, {sort:{time: -1}, limit:5});}
})

Template.iChat.helpers({
	isTheChat: function(){return Meteor.userId() == this.uid}
});

Template.iChat.events({
	"click .jbsapp-delete-icon": function(){Chat.remove(this._id);}
})