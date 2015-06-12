Template.mycollege.helpers({
	mylist:function(){return MyColleges.find();}

})


Template.mycollege.events({
	'submit #createlist': function(event){
		event.preventDefault();
		var collegename = event.target.CollegeSearch.value;
		var currentuserId = Meteor.userId();
		var college = Colleges.find({collegename: collegename});
		MyColleges.insert({collegename: collegename, ea:college["ea"], rd: college["rd"]});
	}

})

