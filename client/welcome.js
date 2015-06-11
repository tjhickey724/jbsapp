Template.welcome.helpers({
	recommendedData: function() {
		return Books.find( {}, {sort: {addedAt:-1, limit: 5} } );
	}
});