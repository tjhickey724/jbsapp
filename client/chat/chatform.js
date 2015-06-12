Template.Chatform.helpers({
	Chatdata: function(){
		var Chatobj = Chat.findOne({uid:Meteor.userId()});

		/*if (ipobj==undefined){
			ipobj = {uid:Meteor.userId(), name:"", ip:""};
			IPAddresses.insert(ipobj);
			ipobj = IPAddresses.findOne({uid:Meteor.userId()});
		}*/
		return Chatobj;
	}
})


Template.Chatform.events({

		"submit #createchatform": function(event){
		event.preventDefault();

		var nickname = event.target.nickname.value;
		var message = event.target.message.value;
		console.log(JSON.stringify(this));

            
        Chat.insert({uid:Meteor.userId(), username:Meteor.user().emails[0].address, nickname:nickname, time:new Date(), message:message});

		Router.go('/Chat');
	
		
	}
})
