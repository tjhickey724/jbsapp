Template.allbooks.helpers({
	booksData: function() {
		return Books.find( {}, {sort: {addedAt:-1} } );
	}
});

Template.allbooks.events({

});