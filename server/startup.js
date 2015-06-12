Meteor.startup(function(){
	if (Messages.find({}).count() == 0) {
		Messages.insert({name: "tzhong@brandeis.edu", time: new Date(), text: "Hello!"});
		Messages.insert({name: "tzhong@brandeis.edu", time: new Date(), text: "Welcome to Anywhere Education"});
	}

	if (Colleges.find().count() == 0) {
		Colleges.insert({collegename: "Harvard University", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Princeton University", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Yale University", ea:"Nov. 1st", rd:"Dec. 31st"});
		Colleges.insert({collegename: "Columbia University", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "The University of Chicago", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Massachusetts Institute of Technology", ea:"None", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Stanford University", ea:"Jan. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Duke University", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "University of Pennsylvania", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "California Institute of Technology", ea:"Nov. 1st", rd:"Jan. 3rd"});
		Colleges.insert({collegename: "Dartmouth College", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Northwestern University", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Johns Hopkins University", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Washington University in St Louis", ea:"Nov. 15th", rd:"Jan. 15th"});
		Colleges.insert({collegename: "Brown University", ea:"Nov. 1st", rd:"Jan. 1st"});
		Colleges.insert({collegename: "Cornell University", ea:"Nov. 1st", rd:"Jan. 2nd"});
		Colleges.insert({collegename: "Rice University", ea:"Nov. 1st", rd:"Jan. 2nd"});
		Colleges.insert({collegename: "University of Notre Dame", ea:"Nov. 1st", rd:"Jan. 3rd"});
	}

	if (MyColleges.find().count() == 0) {
		MyColleges.insert({collegename: "Harvard University", ea:"Nov. 1st", rd:"Jan. 1st"});
	}

})