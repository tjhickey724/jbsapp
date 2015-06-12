if(Meteor.isClient){

	Template.albums.helpers({
		'theAlbums': function(){
			return Albums.find({}, {sort: {dateAdded: 1} });
		},

		'selectedClass': function(){
			var albumID = this._id;
      		var selectedAlbum = Session.get('selectedAlbum');
      		if(albumID==selectedAlbum){
        		return "selected"
      		}
		}
	})

	Template.albums.events({
		'click .increment': function(){
			var selectedAlbum = Session.get('selectedAlbum');
      		Albums.update(selectedAlbum, {$inc: {rating: 1} });
    },
    	'click .decrement': function(){
      		var selectedAlbum = Session.get('selectedAlbum');
      		Albums.update(selectedAlbum, {$inc: {rating: -1} });
	}

	})

}