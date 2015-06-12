Template.book.events({
	'click .edit-btn': function() {
		event.preventDefault();

		Session.set("aBook",function() {
			return Books.findOne({_id:this._id});
		});

		Router.go('/editBook/'+this._id);
	}
});