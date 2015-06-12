Template.welcome.helpers({
	getRevs: function(){return Reviews.find({}, {sort: {createdAt: 1}});}
})

Template.welcome.events({
	"submit #sendRev": function(event){

		event.preventDefault();

		var review = event.target.review.value;
		var album = event.target.album.value;
		var artist = event.target.artist.value;




		console.log(JSON.stringify(this));

		if(Meteor.user()==null){
			Reviews._collection.insert({
				username:"Anonymous",
				artist:artist,
				album:album,
				review:review,
				createdAt:new Date()
			});
		} else if(Meteor.user().profile.userName==undefined){
			Reviews._collection.insert({
				username:Meteor.user().emails[0].address,
				artist:artist,
				album:album,
				review:review,
				createdAt:new Date()
			});
		} else {
			Reviews._collection.insert({
				username:Meteor.user().profile.userName,
				artist:artist,
				album:album,
				review:review,
				createdAt:new Date()
			})
		}

		event.target.review.value="";
		event.target.album.value="";
	}

})