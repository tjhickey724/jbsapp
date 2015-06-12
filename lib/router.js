Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name:'welcome'});
Router.route('/college', {name:'college'});
Router.route('/chat', {name:'chat'});
Router.route('/about', {name:'about'});
