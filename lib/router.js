Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/about', {name: 'about'});

Router.route('/sponsors', {name:'sponsors'})

Router.route('/iptable', {name: 'iptable'});

Router.route('/iptable/edit',{name:'ipform'});

Router.route('/chat',{name:'Chat'});

Router.route('/schedule',{name:'schedule'});

Router.route('/addSchedule',{name:'addSchedule'});

Router.route('/dictate', {name: 'dictation'});

Router.route('/speak', {name: 'speech'});

Router.route('/people',{name:'people'});

Router.route('/firefly',{name:'firefly'});

Router.route('/draw',{name:'draw'});

Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
