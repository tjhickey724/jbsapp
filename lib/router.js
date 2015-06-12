Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/about', {name: 'about'});

Router.route('/allbooks', {name:'allbooks'});

Router.route('/mybooks', {name:'mybooks'});

Router.route('/editBook/:_id', {name:'editbook',
	data: function() {
		return Books.find({_id:this.params._id});
	}
});

Router.route('/people',{name:'people'});

Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ 
		return Meteor.users.findOne({_id:this.params._id})
	}
});