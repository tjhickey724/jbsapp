Template.welcome.helpers({
	recentData: function() {
		return Books.find( {}, {sort: {addedAt:-1}, limit:5 } );
	},

	recommendedData: function() {
		sizeOf = Books.find({addedBy:Meteor.userId()}).fetch();
		rand = Math.floor(Math.random() * sizeOf.length);
		aShelf = sizeOf[rand].shelf;
		return Books.find( {shelf:aShelf}, {sort: {limit: 5} } );
	},

	recommendedShelf: function() {
		return aShelf;
	}
});