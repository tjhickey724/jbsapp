Template.ipform.helpers({
	ipdata: function(){
		var ipobj = IPAddresses.findOne({uid:Meteor.userId()});

		/*if (ipobj==undefined){
			ipobj = {uid:Meteor.userId(), name:"", ip:""};
			IPAddresses.insert(ipobj);
			ipobj = IPAddresses.findOne({uid:Meteor.userId()});
		}*/
		return ipobj;
	}
})


Template.ipform.events({
	"submit #editipform": function(event){
		event.preventDefault();

		var name = event.target.name.value;
		var ip = event.target.ip.value;
		console.log(JSON.stringify(this));

		IPAddresses.update(this._id,
			{$set:{name:name, ip:ip}});

		Router.go('/iptable');
		
	},

		"submit #createipform": function(event){
		event.preventDefault();

		var name = event.target.name.value;
		var ip = event.target.ip.value;
		console.log(JSON.stringify(this));

		IPAddresses.insert({uid:Meteor.userId(), name:name, ip:ip});

		Router.go('/iptable');
		
	}
})