var myTeam =
  [
    {name:"Tim Hickey"    , email: "tjhickey@brandeis.edu" },
    {name:"Eyad Fallatah" , email: "fallatah@brandeis.edu" }
  ];

Template.about.helpers(
 {
   team: myTeam
 }
)