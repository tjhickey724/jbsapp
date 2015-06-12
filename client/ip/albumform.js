Template.albumform.helpers({
	'albums': function(){
		return Albums.find({});
	}
});

Template.albumform.events({
		'submit': function(event){
		event.preventDefault();

		var nameVar = event.target.name.value;
		var artistVar = event.target.artist.value;
		var genreVar = event.target.genre.value;
		var releaseVar = event.target.release.value;

		Albums._collection.insert({name: nameVar, 
			artist: artistVar, 
			genre: genreVar, 
			release: releaseVar,
			rating: 0,
			dateAdded: new Date()
		});

		Router.go('/albums');
		
	}
})
