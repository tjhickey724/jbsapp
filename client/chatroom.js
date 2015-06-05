	if (People.find({}).count()==0){
		People.insert({name:"Daniel",createdAt:Date(),message:"What's up, guys?"});
		People.insert({name:"Amy",createdAt:Date(),message:"Nothing much!"});
		People.insert({name:"John",createdAt:Date(),message:"This is cool."});
	}
