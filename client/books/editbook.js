Template.editbook.helpers({
	currentBook:function() {
		
		console.log(window.location.pathname.split("/"));
		bookId = window.location.pathname.split("/")[2];
		return Books.findOne({_id:bookId});
	}
});

Template.editbook.events({
	"submit #editBook": function(event) {
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

		Books.update(this._id,{$set: 
			{
				title:t,
				author:a,
				shelf:s,
				isbn:i,
				tags:g,
				status:stat
			}
		});

		Router.go('/mybooks');
	}
});