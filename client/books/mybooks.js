Template.mybooks.helpers({
	booksData: function() {
		return Books.find( {addedBy:Meteor.userId()}, {sort: {addedAt:-1} } );
	}
});

Template.mybooks.events({
	"submit #addbookform": function(event) {
		event.preventDefault();

		var t = event.target.bookTitle.value;
		var a = event.target.bookAuthor.value;
		var s = event.target.bookShelf.value;
		var i = event.target.bookISBN.value;
		var g = event.target.bookTags.value.split(",");
		var stat = event.target.bookStatus.value;

		if (s === "") {
			s = "default";
		}

		Books.insert({
			title:t,
			author:a,
			shelf:s,
			isbn:i,
			tags:g,
			status:stat,
			addedBy:Meteor.userId(),
			addedAt:new Date()
		});

		bookTitle.value = '';
		bookAuthor.value = '';
		bookShelf.value = '';
		bookISBN.value = '';
		bookTags.value = '';
	}
});