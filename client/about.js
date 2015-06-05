var myTeam= [
{name:"Barry Obama", email: "pres@whitehouse.gov"},
{name:"Tim Hickey", email:"tjhickey@brandeis.edu"},
{name:"Eyad Fallatah", email:"fallatah@brandeis.edu"}
]

Template.about.helpers({
	name:"Jason Theoharis",
	email:"jtheo@brandeis.edu",
	age:"20",
	hometown:"Upton, MA",
	team: function() {return myTeam;}
})