Template.addSchedule.events({
	"submit #createRemind": function(event){
		event.preventDefault();
		var time= event.target.time.value;
		var remind = event.target.remind.value;
		Schedules.insert({time:time, remind:remind});
		console.log("Reminder inserted"+time+" "+remind);
	}

})