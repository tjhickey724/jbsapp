

Template.chats.helpers({
   chatData:function(){ return Chats.find({},{sort:{createdAt: -1},limit:10});}
});


Template.chatinput.events({
    
    "submit #chatinputform": function(event){
		event.preventDefault();

		var msg = event.target.message.value;
		console.log(JSON.stringify(this));
   
		Chats.insert({userName:Meteor.user().profile.userName,message:msg,createdAt:new Date()});

		Router.go('/chat');
		
	},
    
    "submit #clearinput": function(event){
		event.preventDefault();
		Chats.remove({});

		Router.go('/chat');
		
	}
})