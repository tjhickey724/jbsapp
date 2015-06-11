
var voices= window.speechSynthesis.getVoices();

Template.learn.helpers({
	theVoices: function(){ return voices;}
})


Template.learn.events({
	'click #start_button': function(event){
	startDictation(event);
	},
	'click .say': function(event){
		var text = $("#words").val();
		var msg = new SpeechSynthesisUtterance(text);
		var voices = window.speechSynthesis.getVoices();
		msg.voice = voices[7];
		msg.lang = 'ja';
		window.speechSynthesis.speak(msg);
	}
})


	var final_transcript = '';
	var recognizing = false;
	
	if ('webkitSpeechRecognition' in window) {
		console.log("webkit is available!");
		var recognition = new webkitSpeechRecognition();
	    recognition.continuous = true;
	    recognition.interimResults = true;
 
	    recognition.onstart = function() {
	      recognizing = true;
	    };
 
	    recognition.onerror = function(event) {
	      console.log(event.error);
	    };
 
	    recognition.onend = function() {
	      recognizing = false;
	    };
 
	    recognition.onresult = function(event) {
			myevent = event;
	      var interim_transcript = '';
	      for (var i = event.resultIndex; i < event.results.length; ++i) {
			  console.log("i="+i);

			if(event.results[i][0].transcript.includes("さようなら")){
				recognition.stop();
			}

	        if (event.results[i].isFinal) {
	          final_transcript += 
	          Math.round(100*event.results[i][0].confidence)+"%-- "+
	          capitalize(event.results[i][0].transcript.trim()) +".\n";
			  console.log('final events.results[i][0].transcript = '+ JSON.stringify(event.results[i][0].transcript));

	        } else {
	          interim_transcript += 
	          Math.round(100*event.results[i][0].confidence)+"%:"+
	          event.results[i][0].transcript;
			  console.log('interim events.results[i][0].transcript = '+ JSON.stringify(event.results[i][0].transcript));

			  if(event.results[i][0].transcript.includes("読みます")){
				var msg = new SpeechSynthesisUtterance(interim_transcript);
				var voices = window.speechSynthesis.getVoices();
				msg.voice = voices[7];
				msg.lang = 'ja';
				window.speechSynthesis.speak(msg);
			}
	        }
	      }
	      //final_transcript = capitalize(final_transcript);
	      final_span.innerHTML = linebreak(final_transcript);
	      interim_span.innerHTML = linebreak(interim_transcript);
    	  
	    };
	}
	
 
	var two_line = /\n\n/g;
	var one_line = /\n/g;
	function linebreak(s) {
	  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
	}
 
	function capitalize(s) {
	  return s.replace(s.substr(0,1), function(m) { return m.toUpperCase(); });
	}
 
	function startDictation(event) {
	  if (recognizing) {
	    recognition.stop();
	    return;
	  }
	  final_transcript = '';
	  recognition.lang = 'ja';
	  recognition.start();
	  final_span.innerHTML = '';
	  interim_span.innerHTML = '';
	}
