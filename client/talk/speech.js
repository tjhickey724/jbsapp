voices: window.speechSynthesis.getVoices()

Template.speech.helpers({
	voices: function(){return voices;}
})

Template.speech.events({
	'click #sayhello': function(event){
		var msg = new SpeechSynthesisUtterance('Hello World');
		window.speechSynthesis.speak(msg);
		msg.voice=voice[3];
		msg.lang='en-US';
	},
	'click .say':function(event){
		//var text = $("#words").value()
		var msg = new SpeechSynthesisUtterance(words.value);
		window.speechSynthesis.speak(msg);
	}
	/*'click .getVoices': function(event){
		console.log("getting voices!");
		voices= window.speechSynthesis.getVoices();
		console.log("voices = "+JSON.stringify(voices));
	}*/
})