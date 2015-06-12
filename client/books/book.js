Template.book.events({
	'click .edit-btn': function() {
		event.preventDefault();

		Router.go('/editBook/'+this._id);
	}
});