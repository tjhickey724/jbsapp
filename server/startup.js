Meteor.startup(function(){
	if (Chats.find({}).count()==0){
		//fake chat info
		Chats.insert({username:"test",createdAt:Date(),message:"hello world"});
		Chats.insert({username:"test2",createdAt:Date(),message:"hello world!"});
		Chats.insert({username:"test3",createdAt:Date(),message:"hello world!! This is a nice long message about this fancy new chat app!!"});
	}
});
